import html from "html-literal";

export default st => `
<h3 class="smallHeadings">Community</h3>
<table id="communityMembers">
<thead>
  <tr><th>Name</th><th>Charities of Interests</th><th>Email</th></tr>
</thead>
  <tbody>
  ${st.userInfo
    .map(
      user =>
        `<tr><td>${user.name}</td><td>${user.interests}</td><td>${user.email}</td></tr>`
    )
    .join()}
  </tbody>
</table>
`;
