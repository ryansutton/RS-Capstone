import html from "html-literal";

export default state => html`
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
    <table>
      <tr>
        <th>Charity</th>
        <th>City</th>
        <th>Website</th>
      </tr>
      ${state.charities
        .map(charity => {
          return html`
            <tr>
              <td class="charityName">${charity.charityName}</td>
              <td class="city">${charity.mailingAddress.city}</td>
              <td class="charityURL">${charity.websiteURL}</td>
            </tr>
          `;
        })
        .join("")}
    </table>
  </div>
`;
