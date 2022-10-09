import html from "html-literal";

export default state => html`
  <h3 class="smallHeadings">This will be the Charity page.</h3>
  <p id="charityParagraph">
    A charity in St.Louis is ${state.charity}.
  </p>
  <!-- <div id="searchContainer">
    <form>
      <input type="search" id="charitySearch" name="charitySearch" />
    </form>
  </div> -->
`;
