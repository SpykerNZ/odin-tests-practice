const analyzeArray = require("../scripts/analyzeArray");

test("analyze array basic", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("array size 1", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("random array", () => {
  expect(analyzeArray([-10, 5, 2, 4, 12, 119])).toEqual({
    average: 22,
    min: -10,
    max: 119,
    length: 6,
  });
});
