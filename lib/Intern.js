const Employee = require("../lib/Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //parent constructor called here;
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;