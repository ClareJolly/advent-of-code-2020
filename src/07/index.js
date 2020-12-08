import fileToArray from '../helpers/fileToArray';
import path from 'path';

import part1 from './part1';
import part2 from './part2';
import test from './part2/test';

const run = () => {
  const inputData = fileToArray(
    path.join(__dirname, 'data/input.txt'),
    'utf-8'
  );

  const solution1 = part1(inputData);
  const solution2 = part2(inputData);
  const solution2Test = test();

  console.log(`part 1 ====>`, solution1);
  console.log(`part 2 ====>`, solution2);
  console.log(`part 2 TEST ====>`, solution2Test);

  return { part1: solution1, part2: solution2 };
};

export default run;
