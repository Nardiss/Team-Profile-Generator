const generateHtml = (teamInfo) => {
    var html = "";
    for (var i = 0; i < teamInfo.length; i++) {
      var role = teamInfo[i].getRole();
      if (role === "Manager") {
        html += `<div class="card" style="width: 18rem;"> 
        <div class="card-header"><h2>${teamInfo[i].getName()} <br/>
                  <i class="fas fa-user-graduate"></i> Manager </h2>
              </div>
        <div class="py-3">
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${teamInfo[i].getId()}</li>
                  <li class="list-group-item">Email: <span id="email"><a href="mailto:${teamInfo[
                    i
                  ].getEmail()}">${teamInfo[i].getEmail()}</a></span></li>
                   <li class="list-group-item">Office Number: ${teamInfo[
                     i
                   ].getofficeNumber()}</li>
                  </ul>
              </div>
   </div>
   `;
      } else if (role === "Engineer") {
        html += `<div class="card" style="width: 18rem;"> 
        <div class="card-header"><h2>${teamInfo[i].getName()} <br/>
                  <i class="fas fa-user-graduate"></i> Engineer </h2>
              </div>
        <div class="py-3">
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${teamInfo[i].getId()}</li>
                  <li class="list-group-item">Email: <span id="email"><a href="mailto:${teamInfo[
                    i
                  ].getEmail()}">${teamInfo[i].getEmail()}</a></span></li>
                  <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${teamInfo[
                    i
                  ].getGithub()}">${teamInfo[i].getGithub()}</a></li>
                  </ul>
              </div>
   </div>
   `;
      } else if (role === "Intern") {
        html += `<div class="card" style="width: 18rem;"> 
        <div class="card-header"><h2>${teamInfo[i].getName()} <br/>
                  <i class="fas fa-user-graduate"></i> Intern</h2>
              </div>
        <div class="py-3">
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${teamInfo[i].getId()}</li>
                  <li class="list-group-item">Email: <span id="email"><a href="mailto:${teamInfo[
                    i
                  ].getEmail()}">${teamInfo[i].getEmail()}</a></span></li>
                  <li class="list-group-item">School: ${teamInfo[
                    i
                  ].getSchool()}</li>
                  </ul>
              </div>
   </div>
   `;
      }
    }
    return html;
  };
  module.exports = generateHtml;
  // Export Function to Generate Full Page
  module.exports = (teamInfo) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossorigin="anonymous"/>
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/ec09384b84.js" crossorigin="anonymous"></script>
      <title> Team Profile Generator </title>
    </head>
    
    <body>
      <header class="py-4 px-5">
          <h1 class="text-center py-2 px-3">My Team</h1>
      </header>
      <main class="container my-5">
        ${generateHtml(teamInfo)}
      </main>
    </body>
    </html>
    `;
  };