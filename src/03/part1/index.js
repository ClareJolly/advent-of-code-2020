const part1 = (inputData, slope = { x: 3, y: 1 }) => {
  const mountain = inputData.map((item) => item.split(''));
  const width = mountain[0].length;

  let trees = 0;
  let position = { x: 0, y: 0 };

  while (position.y < mountain.length) {
    const expectedX = position.x + slope.x;
    const expectedY = position.y + slope.y;

    if (expectedY > mountain.length - 1) {
      break;
    }

    const newX = expectedX > width - 1 ? expectedX - width : expectedX;
    const newPosition = { x: newX, y: position.y + slope.y };

    if (mountain[newPosition.y][newPosition.x] === '#') {
      trees += 1;
    }

    position = newPosition;
  }

  return trees;
};

export default part1;
