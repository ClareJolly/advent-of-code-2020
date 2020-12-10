const part1 = (inputData) => {
  const data = inputData.map((inp) => Number(inp)).sort((a, b) => a - b);
  const deviceRating = data.slice(-1)[0] + 3;
  data.push(deviceRating);
  const outletRating = 0;
  const checkedAdapters = [outletRating];

  while (checkedAdapters.slice(-1)[0] <= deviceRating) {
    const lastChecked = data.filter(
      (init) =>
        (init <= checkedAdapters.slice(-1)[0] + 3 &&
          init > checkedAdapters.slice(-1)[0]) ||
        outletRating
    );
    checkedAdapters.push(lastChecked[0]);
  }
  checkedAdapters.splice(-1, 1);

  const summary = checkedAdapters.reduce((acc, item, ind) => {
    if (ind < 1) return acc;
    const key = item - checkedAdapters[ind - 1];
    if (!acc[key]) acc[key] = 0;
    acc[key]++;
    return acc;
  }, {});

  return summary['3'] * summary['1'];
};

export default part1;
