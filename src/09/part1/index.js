const part1 = (inputData, preambleLength) => {
  const data = inputData.map((x) => Number(x));

  const validList = [];
  const invalidList = [];
  for (let i = preambleLength; i < data.length; i++) {
    const toCheck = data[i];
    const sliced = data.slice(i - preambleLength, i);
    const localValid = [];
    sliced.forEach((s) => {
      const matchFound = sliced.includes(toCheck - s);
      if (matchFound) {
        if (!validList.includes(toCheck)) validList.push(toCheck);
        if (!localValid.includes(toCheck)) localValid.push(toCheck);
      } else {
      }
    });
    if (!localValid.length) invalidList.push(toCheck);
  }
  return invalidList[0];
};

export default part1;
