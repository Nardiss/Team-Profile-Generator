const Employee = require("../lib/Employee.js");
const employee = new Employee("maame", "222", "maame@gmail.com");

test("creates an employee object", () => {
  expect(employee.name).toBe("maame");
  expect(employee.id).toBe("222");
  expect(employee.email).toBe("maame@gmail.com");
});

test("create getName() method", () => {
  expect(employee.getName()).toBe("maame");
});

test("create getId() method", () => {
  expect(employee.getId()).toBe("222");
});

test("create getEmail() method", () => {
  expect(employee.getEmail()).toBe("maame@gmail.com");
});

test("create getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});