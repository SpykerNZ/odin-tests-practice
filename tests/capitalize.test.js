const capitalize = require("../scripts/capitalize");

test("all lower case string", () => {
  expect(capitalize("test")).toBe("Test");
});

test("first letter already capitalized", () => {
  expect(capitalize("Test")).toBe("Test");
});

test("test empty string", () => {
  expect(capitalize("")).toBe("");
});
