const caesarCipher = require("../scripts/caesarCipher");

test("standard shift", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("shift wrap around", () => {
  expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("capital leters", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("Punctuation", () => {
  expect(caesarCipher(".abc,", 1)).toBe(".bcd,");
});
