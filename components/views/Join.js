import html from "html-literal";

export default state => html`
  <section id="newUser">
    <form id="newUser" method="POST" action="">
      <h2>Join the Community</h2>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          required
        />
      </div>
      <div>
        <label for="interests">Interests:</label>
        <input
          type="text"
          name="interests"
          id="interests"
          placeholder="What kind of charities are you interested in?"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <input type="submit" name="submit" value="Submit User" />
    </form>
  </section>
`;
