const operators = {
  '+': function (a, b) {
    return a + b;
  },
  '*': function (a, b) {
    return a * b;
  },
};

const process = (item) => {
  if (!isNaN(Number(item))) {
    Number(item);
  }
  while (item.match(/\(/)) {
    item = item.replace(/\([^()]+\)/, (match) =>
      process(match.slice(1, match.length - 1))
    );
  }
  while (item.match(/\+/)) {
    item = item.replace(/(\d+) \+ (\d+)/, (match, a, b) =>
      operators['+'](parseInt(a), parseInt(b))
    );
  }
  while (item.match(/\*/)) {
    item = item.replace(/(\d+) \* (\d+)/, (match, a, b) =>
      operators['*'](parseInt(a), parseInt(b))
    );
  }
  return Number(item);
};

const part2 = (inputData) => {
  let total = 0;
  inputData.forEach((c) => {
    total += process(c);
  });
  return total;
};

export default part2;
