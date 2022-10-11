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
  if (state.view === "Findcharity") {
    document.querySelector(".icons").addEventListener("click", event => {
      event.preventDefault();

      const searchTerm = document.querySelector(".search").value;
      console.log(searchTerm);
    });
    document.querySelector(".search").addEventListener("keypress", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".icons").click();
      }
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
      case "Home":
        axios
          .get(
            `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_NAVIGATOR_APP_ID}&app_key=${process.env.CHARITY_NAVIGATOR_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Findcharity":
        axios
          .get(
            `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_NAVIGATOR_APP_ID}&app_key=${process.env.CHARITY_NAVIGATOR_API_KEY}&state=MO&city=St.%20Louis`
          )
          .then(response => {
            console.log(response.data);
            store.Findcharity.charity = {};
            store.Findcharity.charity = response.data[0].charityName;
            console.log(store.Findcharity.charity);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
