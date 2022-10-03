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

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
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
