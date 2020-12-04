import getBatches from '../helpers'

const validateYears = (val, low, high) => {
  return val.length === 4 && parseInt(val) > low && parseInt(val) <= high
}

const validationRules = {
  byr: (val) => validateYears(val, '1920', '2002'),
  iyr: (val) => validateYears(val, '2010', '2020'),
  eyr: (val) => validateYears(val, '2020', '2030'),
  hgt: (val) => {
    return true
  }, //' (Height) - a number followed by either cm or in:',
  // - If cm, the number must be at least 150 and at most 193.
  // - If in, the number must be at least 59 and at most 76.
  hcl: (val) => {
    return true
  }, //' (Hair Color) - a # followed by exactly six characters 0-9 or a-f.',
  ecl: (val) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val), //' (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.',
  pid: (val) => {
    return true
  }, //' (Passport ID) - a nine-digit number, including leading zeroes.',
  cid: (val) => true,
}

const validate = (item) => {
  const itemKey = Object.keys(item)[0]
  return validationRules[itemKey](item[itemKey])
}

const part2 = (inputData) => {
  const batches = getBatches(inputData)

  const valid = batches.filter((batch) => {
    const keys = Object.keys(batch)
    return keys.length === 8 || (keys.length === 7 && !keys.includes('cid'))
  })
  return valid.length
}

export default part2
export { validate }
