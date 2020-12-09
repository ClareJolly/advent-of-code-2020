import fileToArray from '../helpers/fileToArray';
import path from 'path';

import part1 from './part1';
import part2 from './part2';

const run = () => {
  const inputData = fileToArray(
    path.join(__dirname, 'data/input.txt'),
    // path.join(__dirname, 'data/testData.txt'),
    'utf-8'
  );

  const solution1 = part1(inputData, 25);
  const solution2 = part2(inputData, 25, solution1);

  console.log(`part 1 ====>`, solution1);
  console.log(`part 2 ====>`, solution2);

  return { part1: solution1, part2: solution2 };
};

export default run;
