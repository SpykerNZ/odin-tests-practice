const reverseString = require("../scripts/reverseString");

test("reverse basic string", () => {
  expect(reverseString("test")).toBe("tset");
});

test("test empty string", () => {
  expect(reverseString("")).toBe("");
});
