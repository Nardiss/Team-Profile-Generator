const Manager = require("../lib/Manager.js");
const manager = new Manager("maame", "222", "maame@gmail.com", "001");

test("create manager object", () => {
  expect(manager.name).toBe("maame");
  expect(manager.id).toBe("222");
  expect(manager.email).toBe("maame@gmail.com");
  expect(manager.officeNumber).toBe("001");
});

test("create getName() method", () => {
  expect(manager.getName()).toBe("maame");
});

test("create getId() method", () => {
  expect(manager.getId()).toBe("222");
});

test("create getEmail() method", () => {
  expect(manager.getEmail()).toBe("maame@gmail.com");
});

test("create getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});