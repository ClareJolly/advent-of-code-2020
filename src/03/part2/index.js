import part1 from '../part1';
const part2 = (inputData) => {
  const slopes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  let total = 1;

  slopes.forEach((s) => {
    total = total * part1(inputData, s);
  });
  return total;
};

export default part2;
