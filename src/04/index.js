/* istanbul ignore file */

import fileToArray from '../helpers/fileToArray';
import path from 'path';

import part1 from './part1';
import part2 from './part2';

const inputData = fileToArray(path.join(__dirname, 'data/input.txt'), 'utf-8');

const solution1 = part1(inputData);
const solution2 = part2(inputData);

console.log(`part 1 ====>`, solution1);
console.log(`part 2 ====>`, solution2);
