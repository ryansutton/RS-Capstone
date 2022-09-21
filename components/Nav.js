import html from "html-literal";

export default () => html`
  <nav>
    <i class="fa-solid fa-bars"></i>
    <ul class="hidden--mobile nav_links">
      <li><a href="./index.html">Home</a></li>
      <li><a href="#">Find a Charity</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="./about.html">About Us</a></li>
      <li><a href="./contact.html">Contact Us</a></li>
    </ul>
  </nav>
`;
