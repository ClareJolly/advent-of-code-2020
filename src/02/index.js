/* istanbul ignore file */

import fileToArray from '../helpers/fileToArray'
import path from 'path'

import part1 from './part1'
import part2 from './part2'

const inputData = fileToArray(path.join(__dirname, 'data/input.txt'), 'utf-8')

part1(inputData, 1)
part2(inputData, 2)
