const part2 = (inputData, preambleLength, part1Number) => {
  const data = inputData.map((x) => Number(x));

  let result = [];
  for (let i = 0; i < data.length && !result.length; i++) {
    let range = [data[i]];
    data.slice(i, data.length).reduce((acc, num) => {
      if (!result.length) {
        range.push(num);
        acc += num;
        if (acc === part1Number) {
          result = range;
        }
        return acc;
      }
    });
  }

  return result.sort()[0] + result.sort()[result.length - 1];
};

export default part2;
