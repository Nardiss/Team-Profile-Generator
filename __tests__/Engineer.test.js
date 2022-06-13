const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
  "maame",
  "222",
  "maame@gmail.com",
  "maamesekyere"
);

test("create engineer object", () => {
  expect(engineer.name).toBe("maame");
  expect(engineer.id).toBe("222");
  expect(engineer.email).toBe("maame@gmail.com");
  expect(engineer.github).toBe("maamesekyere");
});

test("create getName() method", () => {
  expect(engineer.getName()).toBe("maame");
});

test("create getId() method", () => {
  expect(engineer.getId()).toBe("222");
});

test("create getEmail() method", () => {
  expect(engineer.getEmail()).toBe("maame@gmail.com");
});

test("create getGithub() method", () => {
  expect(engineer.getGithub()).toBe("maamesekyere");
});

test("create getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});