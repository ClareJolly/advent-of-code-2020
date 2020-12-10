const part2 = (inputData) => {
  const data = inputData.map((inp) => Number(inp)).sort((a, b) => a - b);

  const deviceRating = data.slice(-1)[0] + 3;
  data.push(deviceRating);
  const outletRating = 0;

  data.unshift(outletRating);
  let counter = [1];
  let summary = (index, diff) =>
    data[index - diff] >= data[index] - 3 ? counter[index - diff] : 0;
  for (let i = 1; i < data.length; i++) {
    let count = summary(i, 1) + summary(i, 2) + summary(i, 3);
    counter.push(count);
  }
  return counter[counter.length - 1];
};

export default part2;
