import html from "html-literal";

export default state => html`
  <section id="newUser">
    <form id="newUser" class="newUserForm" method="POST" action="">
      <fieldset>
        <legend>Join The Community</legend>
        <div class="newUserForm">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            class="inputs"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="newUserForm">
          <label for="interests">Cause Interests:</label>
          <input
            type="text"
            name="interests"
            id="interests"
            class="inputs"
            placeholder="Cause"
            required
          />
        </div>
        <div class="newUserForm">
          <label for="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            class="inputs"
            placeholder="Email"
            required
          />
        </div>
        <label for="submit"></label>
        <input class="newUserForm" type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>
  </section>
`;
