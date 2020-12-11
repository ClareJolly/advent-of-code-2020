const checkAdjacent = (data, x, y) => {
  //   console.log('🚀 ~ file: index.js ~ line 2 ~ checkAdjacent ~ x, y', x, y);
  let count = 0;
  if (y > 0) {
    if (['#'].includes(data[y - 1][x].symbol)) count += 1;
    if (x > 0) {
      if (['#'].includes(data[y - 1][x - 1].symbol)) count += 1;
    }
    if (x < data[y].length - 1) {
      if (['#'].includes(data[y - 1][x + 1].symbol)) count += 1;
    }
  }
  if (y < data.length - 1) {
    if (['#'].includes(data[y + 1][x].symbol)) count += 1;
    if (x > 0) {
      if (['#'].includes(data[y + 1][x - 1].symbol)) count += 1;
    }
    if (x < data[y].length - 1) {
      if (['#'].includes(data[y + 1][x + 1].symbol)) count += 1;
    }
  }
  if (x > 0) {
    if (['#'].includes(data[y][x - 1].symbol)) count += 1;
  }
  if (x < data[y].length - 1) {
    if (['#'].includes(data[y][x + 1].symbol)) count += 1;
  }
  return count;
};

const rule1 = (data) => {
  const prep = preCount(data);
  return prep.map((row, i1) => {
    return row.map((seat, i2) => {
      return {
        ...seat,
        symbol: seat.adjacent === 0 && seat.symbol !== '.' ? '#' : seat.symbol,
      };
    });
  });
};

const rule2 = (data) => {
  const prep = preCount(data);
  return prep.map((row, i1) => {
    return row.map((seat, i2) => {
      return {
        ...seat,
        symbol: seat.adjacent > 3 && seat.symbol !== '.' ? 'L' : seat.symbol,
      };
    });
  });
};

const preCount = (data) => {
  return data.map((row, ir) =>
    row.map((s, is) => ({
      ...s,
      adjacent: checkAdjacent(data, is, ir),
    }))
  );
};

const part1 = (inputData) => {
  let data = inputData.map((row) =>
    row.split('').map((s) => ({ adjacent: s === 'L', symbol: s }))
  );

  const prep = preCount(data);

  let i = 0;
  let a = data;
  let b = data;
  while (i === 0 || !(JSON.stringify(a) === JSON.stringify(b))) {
    const r1 = rule1(a);
    b = r1;
    const r2 = rule2(r1);
    a = r2;
    i++;
  }

  return a.reduce(
    (acc, row) => (acc += row.filter((st) => st.symbol === '#').length),
    0
  );
};

export default part1;
