const Intern = require("../lib/Intern.js");
const intern = new Intern("maame", "222", "maame@gmail.com", "columbia");

test("create intern object", () => {
  expect(intern.name).toBe("maame");
  expect(intern.id).toBe("222");
  expect(intern.email).toBe("maame@gmail.com");
  expect(intern.school).toBe("columbia");
});

test("create getName() method", () => {
  expect(intern.getName()).toBe("maame");
});

test("create getId() method", () => {
  expect(intern.getId()).toBe("222");
});

test("create getEmail() method", () => {
  expect(intern.getEmail()).toBe("maame@gmail.com");
});

test("create getSchool() method", () => {
  expect(intern.getSchool()).toBe("columbia");
});

test("create getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});