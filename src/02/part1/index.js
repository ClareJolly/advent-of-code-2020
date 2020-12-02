import arrToNumbers from '../../helpers/arrToNumbers'

const part1 = (inputData) => {
  const cleanInput = inputData.map((item) => {
    const details = item.split(' ')
    return {
      numbers: arrToNumbers(details[0].split('-')),
      character: details[1].replace(':', ''),
      password: details[2],
    }
  })

  const filtered = cleanInput.filter((pw) => {
    const occurances = pw.password
      .split('')
      .filter((char) => char === pw.character).length

    return occurances >= pw.numbers[0] && occurances <= pw.numbers[1]
  })
  return filtered.length
}

export default part1
