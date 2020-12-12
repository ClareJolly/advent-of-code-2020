var waypoint = { x: 10, y: -1 };
var shipPosition = { x: 0, y: 0 };

const part2 = (inputData) => {
  const data = inputData.map((x) => [x.slice(0, 1), parseInt(x.slice(1))]);

  data.forEach((dir, i) => {
    const moveDetails = dir;
    switch (moveDetails[0]) {
      case 'F':
        shipMove(moveDetails[1]);
        break;
      case 'R':
      case 'L':
        rotateWaypoint(moveDetails[0], moveDetails[1]);
        break;
      default:
        moveWaypoint(moveDetails[0], moveDetails[1], waypoint);
        break;
    }
  });
  return Math.abs(shipPosition.x) + Math.abs(shipPosition.y);
};

const shipMove = (value) => {
  shipPosition.x += waypoint.x * value;
  shipPosition.y += waypoint.y * value;
};

const rotateWaypoint = (direction, number) => {
  var rotate = () => {
    var x = waypoint.x;
    var y = waypoint.y;
    switch (direction) {
      case 'L':
        waypoint.x = y;
        waypoint.y = x * -1;
        break;
      case 'R':
        waypoint.x = y * -1;
        waypoint.y = x;
        break;
    }
  };

  var turns = number / 90;
  for (let i = 0; i < turns; i++) {
    rotate();
  }
};

const moveWaypoint = (direction, number, currentWaypoint) => {
  switch (direction) {
    case 'N':
      currentWaypoint.y -= number;
      break;
    case 'E':
      currentWaypoint.x += number;
      break;
    case 'S':
      currentWaypoint.y += number;
      break;
    case 'W':
      currentWaypoint.x -= number;
      break;
  }
};

export default part2;
