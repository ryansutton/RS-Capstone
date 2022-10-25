import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
  afterRender(state);

  router.updatePageLinks();
}

//setting event listeners for after the page is rendered to handle the hamburger bar in small view and the search bar on Find a Charity page
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  //allow users to search for local charities by topic
  if (state.view === "Findcharity") {
    document.querySelector(".icons").addEventListener("click", event => {
      event.preventDefault();

      const searchTerm = document.querySelector(".search").value;
      // console.log(searchTerm);
      axios
        .get(
          `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_NAVIGATOR_APP_ID}&app_key=${process.env.CHARITY_NAVIGATOR_API_KEY}&search=${searchTerm}&state=MO&city=St.%20Louis`
        )
        // .then(response => {
        //   if (response === 404) {
        //     console.log("No search results found");
        //   }
        // })
        .then(response => {
          // console.log(response.data);
          // let results = response.data;
          // store.Findcharity.charities = [];
          const results = response.data.map(charity => {
            if (charity.websiteURL === null) {
              charity.websiteURL = "";
            }
            if (charity.mailingAddress.city === "ST LOUIS") {
              charity.mailingAddress.city = "St. Louis";
            }
            if (charity.mailingAddress.city === "LAKE ST LOUIS") {
              charity.mailingAddress.city = "Lake St. Louis";
            }
            return charity;
          });
          store.Findcharity.charities = results;
          if (results.length > 0) {
            store.Findcharity.hidden = false;
            //add second table to display message saying results not found if there are no results
          }
          console.log(store.Findcharity.charities);
          router.navigate("/Findcharity");
        })
        .catch(err => {
          console.log(err);
        });
    });
    document.querySelector(".search").addEventListener("keypress", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".icons").click();
      }
    });
  }
  //allowing user to had new user information into user database
  if (state.view === "Join") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        name: inputList.name.value,
        interests: inputList.interests.value,
        email: inputList.email.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.CHARITY_USER_API_URL}/community`, requestData)
        .then(response => {
          //push new user to display in list of community members
          store.Community.userInfo.push(response.data);
          router.navigate("/Community");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Handle multiple routes
    switch (view) {
      // case "Home":
      //   axios
      //     .get(
      //       `https://newsapi.org/v2/everything?q=charities&domains=stltoday.com&apiKey=${process.env.NEWS_API_KEY}`
      //     )
      //     .then(response => {
      //       console.log(response.data);
      //       done();
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       done();
      //     });
      //   break;

      //display table of users
      case "Community":
        axios
          .get(`${process.env.CHARITY_USER_API_URL}/community`)
          .then(response => {
            store.Community.userInfo = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      // case "Findcharity":
      //   axios
      //     .get(
      //       `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_NAVIGATOR_APP_ID}&app_key=${process.env.CHARITY_NAVIGATOR_API_KEY}&state=MO&city=St.%20Louis`
      //     )
      //     .then(response => {
      //       console.log(response.data);
      //       store.Findcharity.charity = {};
      //       store.Findcharity.charity = response.data[0].charityName;
      //       console.log(store.Findcharity.charity);
      //       done();
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       done();
      //     });
      //   break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      // debugger;
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
