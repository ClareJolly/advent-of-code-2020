/* istanbul ignore file */

import fileToArray from '../helpers/fileToArray';
import path from 'path';

import part1 from './part1';
import part2 from './part2';

const run = () => {
  const expenseData = fileToArray(
    path.join(__dirname, 'data/expenseReport.txt'),
    'utf-8'
  );

  const solution1 = part1(expenseData);
  const solution2 = part2(expenseData);

  console.log(`part 1 ====>`, solution1);
  console.log(`part 2 ====>`, solution2);

  return { part1: solution1, part2: solution2 };
};

export default run;
