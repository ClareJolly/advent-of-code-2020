const part2 = (inputData) => {
  const starters = inputData[0].split(',').map((num) => Number(num));

  var indexes = new Map();

  starters.forEach((n, i) => indexes.set(n, i));

  let lastSpoken = 0;
  for (let i = starters.length; i <= 30000000 - 2; i++) {
    if (indexes.has(lastSpoken)) {
      var lastIndex = indexes.get(lastSpoken);
      indexes.set(lastSpoken, i);
      lastSpoken = i - lastIndex;
    } else {
      indexes.set(lastSpoken, i);
      lastSpoken = 0;
    }
  }

  return lastSpoken;
};

export default part2;
