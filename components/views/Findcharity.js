import html from "html-literal";

export default state => html`
  <h3 class="smallHeadings">Find a Charity</h3>
  <!-- <p id="charityParagraph">
    A charity in St.Louis is ${state.charity}.
  </p> -->
  <div class="searchContainer">
    <table class="elementsContainer">
      <tr>
        <td>
          <input type="text" placeholder="Search by category" class="search" />
        </td>
        <td>
          <a href="#" class="icons"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></a>
        </td>
      </tr>
    </table>
  </div>
`;
