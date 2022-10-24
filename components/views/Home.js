import html from "html-literal";
// import picture from "../../assets/img/pexels-julia-m-cameron-6994992.jpg";
import bluesPicture from "../../assets/img/BarclayDoghouse.jpeg";
import kidsmartPic from "../../assets/img/kidsmart.png";

export default state => html`
  <div class="newsContainer">
    <div class="newsPicture">
      <a
        href="https://philanthropynewsdigest.org/news/other-sources/article/?id=11316275&title=Purina-and-St.-Louis-Blues-Unveil-%27Purina-Doghouse%27-Penalty-Box-For-2022-2023-Season"
        target="_blank"
      >
        <img src=${bluesPicture} />
      </a>
    </div>
    <div class="newsPicture">
      <a
        href="https://www.stltoday.com/pr/business/katie-s-pizza-will-donate-to-kidsmart-help-provide-school-supplies-to-students-in-need/article_842633be-45b1-11ed-9859-cf8fed9d5c26.html"
        target="_blank"
      >
        <img src=${kidsmartPic} />
      </a>
    </div>
  </div>
  <!-- <img src=$ picture alt="Charity Image" /> -->
`;
