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
  <div class="resultsContainer">
    <tr>
      <th>Charity</th>
      <th>City</th>
      <th>Website</th>
    </tr>
    ${state.charities
      .map(charity => {
        return `<tr><td class="charityName">${charities.charityName}</td><td class="city">${charities.mailingAddress.city}</td><td class="charityURL">${charities.websiteURL}</td></tr>`;
      })
      .join("")}
  </div>
`;
