const checkVisible = (data, x, y) => {
  let visible = 0;
  const visibleLeft = [];
  const visibleRight = [];
  const visibleUp = [];
  const visibleDown = [];
  const visibleRU = [];
  const visibleRD = [];
  const visibleLU = [];
  const visibleLD = [];
  const rowLength = data[y].length;

  for (let i = x + 1, z = y - 1; i < rowLength && z >= 0; i++, z--) {
    visibleRU.push(data[z]?.[i]?.symbol);
  }
  if (visibleRU.filter((v) => v !== '.')[0] === '#') visible++;

  for (let i = x + 1, z = y + 1; i < rowLength && z < data.length; i++, z++) {
    visibleRD.push(data[z]?.[i]?.symbol);
  }
  if (visibleRD.filter((v) => v !== '.')[0] === '#') visible++;

  for (let i = x - 1, z = y - 1; i >= 0 && z >= 0; i--, z--) {
    visibleLU.push(data[z]?.[i]?.symbol);
  }
  if (visibleLU.filter((v) => v !== '.')[0] === '#') visible++;

  for (let i = x - 1, z = y + 1; i >= 0 && z < data.length; i--, z++) {
    visibleLD.push(data[z]?.[i]?.symbol);
  }
  if (visibleLD.filter((v) => v !== '.')[0] === '#') visible++;

  for (let i = x + 1; i < rowLength; i++) {
    visibleRight.push(data[y]?.[i]?.symbol);
  }
  if (visibleRight.filter((v) => v !== '.')[0] === '#') visible++;
  for (let i = x - 1; i >= 0; i--) {
    visibleLeft.push(data[y]?.[i]?.symbol);
  }
  if (visibleLeft.filter((v) => v !== '.')[0] === '#') visible++;
  for (let i = y + 1; i < data.length; i++) {
    visibleDown.push(data[i]?.[x]?.symbol);
  }
  if (visibleDown.filter((v) => v !== '.')[0] === '#') visible++;

  for (let i = y - 1; i >= 0; i--) {
    visibleUp.push(data[i]?.[x]?.symbol);
  }
  if (visibleUp.filter((v) => v !== '.')[0] === '#') visible++;

  return visible;
};

const ruleQuery = (seat, rule) => {
  if (rule === 1) {
    return seat.visible === 0 && seat.symbol !== '.' ? '#' : seat.symbol;
  } else {
    return seat.visible > 4 && seat.symbol !== '.' ? 'L' : seat.symbol;
  }
};

const ruleProcess = (data, rule) => {
  const prep = preCount(data, rule);
  return prep.map((row, i1) => {
    return row.map((seat, i2) => {
      return {
        ...seat,
        symbol: ruleQuery(seat, rule),
      };
    });
  });
};

const preCount = (data, rule) => {
  return data.map((row, ir) =>
    row.map((s, is) => {
      const vis = { visible: checkVisible(data, is, ir) };
      return {
        ...s,
        ...vis,
      };
    })
  );
};

const part2 = (inputData) => {
  let data = inputData.map((row) =>
    row.split('').map((s) => ({ visible: s === 'L', symbol: s }))
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

export default part2;
