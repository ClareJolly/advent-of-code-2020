import part1 from '../part1';

const part2 = (inputData) => {
  const slopes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  return slopes.reduce((acc, item) => {
    return acc * part1(inputData, item);
  }, 1);
};

export default part2;
