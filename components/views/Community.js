import html from "html-literal";

export default st => `
  <h3 class="smallHeadings">Community</h3>
  <table id="communityMembers">
<tr><th>Name</th><th>Interests</th><th>Email</th></tr>
${st.community
  .map(
    user =>
      `<tr><td>${user.name}</td><td>${user.interests}</td><td>${user.email}</td></tr>`
  )
  .join()}
</table>
`;
