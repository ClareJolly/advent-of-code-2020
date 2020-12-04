import fileToArray from '../../helpers/fileToArray'
import path from 'path'

import part1 from '.'

describe('part1', () => {
  const inputData = fileToArray(
    path.join(__dirname, '../data/test.txt'),
    'utf-8'
  )

  it('returns the correct number of valid passports"', () => {
    const result = part1(inputData)

    expect(result).toEqual(2)
  })
})
