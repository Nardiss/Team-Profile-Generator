const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./generate-html");
const fs = require("fs");
const teamInfo = [];

//create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your employee ID? (Required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter your employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "role",
      message: "Select this employees role:",
      choices: ["Manager", "Engineer", "Intern"],
    },

    {
      type: "input",
      name: "officeNumber",
      message: "Manager - office number:",
      when: ({ role }) => {
        if (role === "Manager") {
          return true;
        } else {
          return false;
        }
      },
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("(Office number required.)");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Engineer - Github username:",
      when: ({ role }) => {
        if (role === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("(Github username is required.)");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Intern - school:",
      when: ({ role }) => {
        if (role === "Intern") {
          return true;
        } else {
          return false;
        }
      },
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("(School attending required.)");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to enter another employee?",
      default: true,
    },
  ]);
};
const promptUser = () => {
  return promptQuestions().then((userResponse) => {
    if (userResponse.role === "Manager") {
      teamInfo.push(
        new Manager(
          userResponse.name,
          userResponse.email,
          userResponse.employeeId,
          userResponse.officeNumber
        )
      );
    } else if (userResponse.role === "Engineer") {
      teamInfo.push(
        new Engineer(
          userResponse.name,
          userResponse.email,
          userResponse.employeeId,
          userResponse.github
        )
      );
    } else if (userResponse.role === "Intern") {
      teamInfo.push(
        new Intern(
          userResponse.name,
          userResponse.email,
          userResponse.employeeId,
          userResponse.school
        )
      );
    }
    if (userResponse.addEmployee) {
      return promptUser(teamInfo);
    } else {
      var html = generateHtml(teamInfo);
      writePage(html);
    }
  });
};
const writePage = (htmlContent) => {
  fs.writeFile("./dist/index.html", htmlContent, (err) => {
    if (err) {
      throw err;
    }
    console.log("Team Info - page generated successfully!");
  });
};

console.log(`
Create a profile of your team: to start, add your team members...
`);
promptUser();