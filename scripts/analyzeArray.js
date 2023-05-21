function analyzeArray(arr) {
  return {
    average: getArrayAverage(arr),
    min: getArrayMin(arr),
    max: getArrayMax(arr),
    length: arr.length,
  };
}

function getArrayAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function getArrayMin(arr) {
  return Math.min(...arr);
}

function getArrayMax(arr) {
  return Math.max(...arr);
}

module.exports = analyzeArray;
