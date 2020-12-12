const getNewFacingAfterRotation = (facing, direction, number) => {
  const rotation = {
    L: ['N', 'W', 'S', 'E'],
    R: ['S', 'W', 'N', 'E'],
  };

  const turns = number / 90;

  const currentIndex = rotation[direction].indexOf(facing);
  let newIndex;
  newIndex = currentIndex + turns;
  while (newIndex > rotation[direction].length - 1) {
    newIndex = newIndex - rotation[direction].length;
  }
  return rotation[direction][newIndex];
};

const part1 = (inputData) => {
  const data = inputData.map((inp) => {
    var initialRegex = /([A-Z])(\d{1,})/g;
    var match = initialRegex.exec(inp);
    return { direction: match[1], number: Number(match[2]) };
  });

  const facingDirMap = {
    E: {
      F: { E: 1, newFacing: 'E' },
      N: { N: 1, newFacing: 'E' },
      S: { N: -1, newFacing: 'E' },
      E: { E: 1, newFacing: 'E' },
      W: { E: -1, newFacing: 'E' },
      L: { N: 0 },
      R: { N: 0 },
    },
    W: {
      F: { E: -1, newFacing: 'W' },
      N: { N: 1, newFacing: 'W' },
      S: { N: -1, newFacing: 'W' },
      E: { E: 1, newFacing: 'W' },
      W: { E: -1, newFacing: 'W' },
      L: { N: 0 },
      R: { N: 0 },
    },
    N: {
      F: { N: 1, newFacing: 'N' },
      N: { N: 1, newFacing: 'N' },
      S: { N: -1, newFacing: 'N' },
      E: { E: 1, newFacing: 'N' },
      W: { E: -1, newFacing: 'N' },
      L: { E: 0 },
      R: { E: 0 },
    },
    S: {
      F: { N: -1, newFacing: 'S' },
      N: { N: 1, newFacing: 'S' },
      S: { N: -1, newFacing: 'S' },
      E: { E: 1, newFacing: 'S' },
      W: { E: -1, newFacing: 'S' },
      L: { E: 0 },
      R: { E: 0 },
    },
  };

  let facing = 'E';
  const stops = [{ E: 0, N: 0 }];

  data.forEach((dir) => {
    stops.push({
      ...stops.slice(-1)[0],
    });
    let lastStop = stops.slice(-1)[0];
    const move = facingDirMap[facing][dir.direction];
    const dirKey = Object.keys(move)[0];
    let rotatedNewFacing = facing;
    if (!move.newFacing) {
      rotatedNewFacing = getNewFacingAfterRotation(
        facing,
        dir.direction,
        dir.number
      );
    }
    lastStop = lastStop[dirKey] += move[dirKey] * dir.number;
    facing = facing || rotatedNewFacing;
  });
  const lastPosition = stops.slice(-1)[0];
  return Math.abs(lastPosition.E) + Math.abs(lastPosition.N);
};

export default part1;
