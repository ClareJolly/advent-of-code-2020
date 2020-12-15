const part1 = (inputData) => {
  const starters = inputData[0].split(',').map((num) => Number(num));

  const data = [...starters];

  for (let i = data.length; i < 2020; i++) {
    const dataCopy = [...data];
    dataCopy.splice(i - 1, 1);
    const previous = dataCopy.lastIndexOf(data[i - 1]);
    if (previous === -1) data.push(0);
    if (previous > -1) data.push(i - previous - 1);
  }
  return data.slice(-1)[0];
};

export default part1;
