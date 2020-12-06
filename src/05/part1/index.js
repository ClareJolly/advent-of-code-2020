const getColumns = (seatCode, totalColumns = 8) => {
  const seatcodeRows = seatCode.split('').slice(7, 10);
  let col = seatcodeRows.reduce(
    (acc, item) => {
      if (item === 'L') {
        return [acc[0], (acc[0] + acc[1]) >> 1];
      }
      if (item === 'R') {
        return [((acc[0] + acc[1]) >> 1) + 1, acc[1]];
      }
    },
    [0, 7]
  );

  return col[0];
  let columnRange = [0, totalColumns - 1];
  seatcodeRows.forEach((code, i) => {
    if (i === 0) {
      columnRange =
        code === 'L'
          ? [0, totalColumns / 2 - 1]
          : [totalColumns / 2, columnRange[1]];
    }
    if (i === 1) {
      columnRange =
        code === 'L'
          ? [
              columnRange[0],
              Math.floor((columnRange[1] - columnRange[0]) / 2) +
                columnRange[0],
            ]
          : [
              (columnRange[1] + 1 - columnRange[0]) / 2 + columnRange[0],
              columnRange[1],
            ];
    }
    if (i === 2) {
      columnRange =
        code === 'L'
          ? [
              columnRange[0],
              Math.floor((columnRange[1] + 1 - columnRange[0]) / 2) +
                columnRange[0] -
                1,
            ]
          : [
              (columnRange[1] + 1 - columnRange[0]) / 2 + columnRange[0],
              columnRange[1],
            ];
    }
  });
  columnRange = [...new Set(columnRange)];
  return columnRange[0];
};

const getRows = (seatCode, totalRows = 128) => {
  const seatcodeRows = seatCode.split('').slice(0, 7);
  let row = seatcodeRows.reduce(
    (acc, item) => {
      if (item === 'F') {
        return [acc[0], (acc[0] + acc[1]) >> 1];
      }
      if (item === 'B') {
        return [((acc[0] + acc[1]) >> 1) + 1, acc[1]];
      }
    },
    [0, 127]
  );

  return row[0];

  let rowRange = [0, totalRows - 1];
  seatcodeRows.forEach((code, i) => {
    if (i === 0) {
      rowRange =
        code === 'F' ? [0, totalRows / 2 - 1] : [totalRows / 2, rowRange[1]];
    }
    if (i === 1) {
      rowRange =
        code === 'F'
          ? [rowRange[0], (rowRange[1] + 1 - rowRange[0]) / 2 + rowRange[0]]
          : [(rowRange[1] + 1 - rowRange[0]) / 2 + rowRange[0], rowRange[1]];
    }
    if (i === 2) {
      rowRange =
        code === 'F'
          ? [
              rowRange[0],
              Math.floor((rowRange[1] + 1 - rowRange[0]) / 2) + rowRange[0] - 1,
            ]
          : [(rowRange[1] + 1 - rowRange[0]) / 2 + rowRange[0], rowRange[1]];
    }
    if (i > 2) {
      rowRange =
        code === 'F'
          ? [rowRange[0], rowRange[1] - (rowRange[1] + 1 - rowRange[0]) / 2]
          : [rowRange[0] + (rowRange[1] + 1 - rowRange[0]) / 2, rowRange[1]];
    }
  });

  rowRange = [...new Set(rowRange)];
  return rowRange[0];
};

const getAllSeats = (inputData) => {
  const totalRows = 128;
  const totalColumns = 8;

  const rows = inputData.reduce((acc, item) => {
    const row = getRows(item, totalRows);
    const column = getColumns(item, totalColumns);
    acc.push(row * 8 + column);
    return acc;
  }, []);

  return rows;
};

const part1 = (inputData) => {
  const rows = getAllSeats(inputData);

  return rows.sort(function (a, b) {
    return b - a;
  })[0];
};

export default part1;
export { getRows, getColumns, getAllSeats };
