const part1 = (inputData, slope = { x: 3, y: 1 }) => {
  const mountain = inputData.map((item) => item.replace('\r', '').split(''));
  const width = inputData[0].length - 1;

  let trees = 0;
  let position = { x: 0, y: 0 };
  mountain.forEach((row) => {
    const expectedX = position.x + slope.x;
    const expectedY = position.y + slope.y;
    if (expectedY > mountain.length - 1) {
      return;
    }
    const newX = expectedX > row.length - 1 ? expectedX - width : expectedX;
    const newPosition = { x: newX, y: position.y + slope.y };
    if (mountain[newPosition.y][newPosition.x] === '#') {
      trees += 1;
    }
    position = newPosition;
  });

  return trees;
};

export default part1;
