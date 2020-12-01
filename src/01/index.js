/* istanbul ignore file */

import fileToArray from '../helpers/fileToArray';
import path from 'path';

import part1 from './part1';
import part2 from './part2';

const expenseData = fileToArray(
  path.join(__dirname, 'data/expenseReport.txt'),
  'utf-8'
);

part1(expenseData);
part2(expenseData);
