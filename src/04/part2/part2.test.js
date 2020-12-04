import fileToArray from '../../helpers/fileToArray'
import path from 'path'

import part2, { validate } from '.'

describe('part2', () => {
  const inputData = fileToArray(
    path.join(__dirname, '../data/test.txt'),
    'utf-8'
  )

  describe('validation Rules', () => {
    const cases = [
      [{ byr: '2002' }, true],
      [{ byr: '2003' }, false],

      [{ iyr: '2012' }, true],
      [{ iyr: '2003' }, false],

      [{ eyr: '2022' }, true],
      [{ eyr: '2033' }, false],

      [{ hgt: '60in' }, true],
      [{ hgt: '190cm' }, true],
      [{ hgt: '190in' }, false],
      [{ hgt: '190' }, false],

      [{ hcl: '#123abc' }, true],
      [{ hcl: '#123abz' }, false],
      [{ hcl: '123abc' }, false],

      [{ ecl: 'brn' }, true],
      [{ ecl: 'wat' }, false],

      [{ pid: '000000001' }, true],
      [{ pid: '0123456789' }, false],

      [{ cid: '0123456789' }, true],
    ]

    test.each(cases)(
      'given %p as argument, returns %p',
      (firstArg, expectedResult) => {
        const result = validate(firstArg)
        expect(result).toEqual(expectedResult)
      }
    )

    // it('returns the correct number of valid passports"', () => {
    //   const result = validate(inputData)

    //   expect(result).toEqual(true)
    // })
  })
  describe('main Process', () => {
    // it('returns the correct number of valid passports"', () => {
    //   const result = part2(inputData)
    //   expect(result).toEqual(2)
    // })
  })
})
