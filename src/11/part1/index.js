const checkAdjacent = (data, x, y) => {
  const adjacent = [];
  const yAbove = data[y - 1];
  const yBelow = data[y + 1];
  if (y > 0) {
    adjacent.push(yAbove[x]?.symbol);
    adjacent.push(yAbove[x - 1]?.symbol);
    adjacent.push(yAbove[x + 1]?.symbol);
  }
  if (y < data.length - 1) {
    adjacent.push(yBelow[x]?.symbol);
    adjacent.push(yBelow[x - 1]?.symbol);
    adjacent.push(yBelow[x + 1]?.symbol);
  }
  adjacent.push(data[y][x - 1]?.symbol);
  adjacent.push(data[y][x + 1]?.symbol);
  const count = adjacent.filter((a) => a === '#').length;
  return count;
};

const ruleQuery = (seat, rule) => {
  if (rule === 1) {
    return seat.adjacent === 0 && seat.symbol !== '.' ? '#' : seat.symbol;
  } else {
    return seat.adjacent > 3 && seat.symbol !== '.' ? 'L' : seat.symbol;
  }
};

const ruleProcess = (data, rule) => {
  const prep = preCount(data);
  return prep.map((row, i1) => {
    return row.map((seat, i2) => {
      return {
        ...seat,
        symbol: ruleQuery(seat, rule),
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

  let i = 0;
  let a = data;
  let b = data;
  while (i === 0 || !(JSON.stringify(a) === JSON.stringify(b))) {
    const r1 = ruleProcess(a, 1);
    b = r1;
    const r2 = ruleProcess(r1, 2);
    a = r2;
    i++;
  }

  return a.reduce(
    (acc, row) => (acc += row.filter((st) => st.symbol === '#').length),
    0
  );
};

export default part1;
