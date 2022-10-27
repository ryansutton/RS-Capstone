import html from "html-literal";
// import picture from "../../assets/img/pexels-julia-m-cameron-6994992.jpg";
import bluesPicture from "../../assets/img/BarclayDoghouse.jpeg";
import kidsmartPic from "../../assets/img/kidsmart.png";

export default state => html`
  <div class="newsContainer">
    <div class="newsPicture" id="barclayPicture">
      <a
        id="barclayPicLink"
        href="https://philanthropynewsdigest.org/news/other-sources/article/?id=11316275&title=Purina-and-St.-Louis-Blues-Unveil-%27Purina-Doghouse%27-Penalty-Box-For-2022-2023-Season"
        target="_blank"
      >
        <img src=${bluesPicture} />
      </a>
      <h2 id="barclayHeadline">
        <a
          href="https://philanthropynewsdigest.org/news/other-sources/article/?id=11316275&title=Purina-and-St.-Louis-Blues-Unveil-%27Purina-Doghouse%27-Penalty-Box-For-2022-2023-Season"
          target="_blank"
        >
          Purina and St. Louis Blues Unveil 'Purina Doghouse' Penalty Box For
          2022-2023 Season
        </a>
      </h2>
    </div>
    <div class="newsPicture" id="kidsmartPicture">
      <a
        href="https://www.stltoday.com/pr/business/katie-s-pizza-will-donate-to-kidsmart-help-provide-school-supplies-to-students-in-need/article_842633be-45b1-11ed-9859-cf8fed9d5c26.html"
        target="_blank"
      >
        <img src=${kidsmartPic} />
      </a>
      <h2 id="katiesHeadline">
        <a
          href="https://www.stltoday.com/pr/business/katie-s-pizza-will-donate-to-kidsmart-help-provide-school-supplies-to-students-in-need/article_842633be-45b1-11ed-9859-cf8fed9d5c26.html"
          target="_blank"
        >
          Katie’s Pizza Will Donate to KidSmart, Help Provide School Supplies to
          Students in Need
        </a>
      </h2>
    </div>
  </div>
  <!-- <img src=$ picture alt="Charity Image" /> -->
`;
