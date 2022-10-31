import html from "html-literal";
import charityNavigatorLogo from "../../assets/img/general_button.jpg";

export default state => html`
  <div id="pageContainer">
    <div id="contentWrap">
      <h3 class="smallHeadings">Find a Charity</h3>
      <div class="searchContainer">
        <table class="elementsContainer">
          <tr>
            <td>
              <input type="text" placeholder="Search by topic" class="search" />
            </td>
            <td>
              <a href="#" class="icons">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div class="resultsContainer ${state.hidden ? "hiddenTable" : ""}">
        <table id="charitiesTable">
          <thead>
            <tr class="headingsRow">
              <th>Charity</th>
              <th>City</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody id="charityTableBody">
            ${state.charities
              .map(charity => {
                return html`
              <tr>
                <td class="charityName">${charity.charityName}</td>
                <td class="city">${charity.mailingAddress.city}</td>
                <td class="charityURL">
                  <a id=charityLink href=${charity.websiteURL} target="_blank"
                    >${charity.websiteURL}</a
                  >
                </td>
              </tr>
            </tbody>
          `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <h3 id="noResults" class="${state.error ? "" : "hiddenTable"}">
        Sorry, no results found
      </h3>
    </div>
    <footer id="footer">
      <div class="charityNavigator">
        <a href="https://www.charitynavigator.org" target="_blank">
          <img id="apiAttribution" src=${charityNavigatorLogo} />
        </a>
        <p id="attribution">Powered by Charity Navigator</p>
      </div>
    </footer>
  </div>
`;
