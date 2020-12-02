import arrToNumbers from '../../helpers/arrToNumbers'

const part2 = (inputData) => {
  const cleanInput = inputData.map((item) => {
    const details = item.split(' ')
    return {
      numbers: arrToNumbers(details[0].split('-')),
      character: details[1].replace(':', ''),
      password: details[2],
    }
  })

  const howManyMatches = cleanInput.map((pw) => {
    const validity = pw.numbers.reduce((acc, item) => {
      return pw.password.charAt(item - 1) === pw.character ? (acc += 1) : acc
    }, 0)

    return { ...pw, validity }
  })
  const totalValid = howManyMatches.filter((valid) => valid.validity === 1)
    .length

  return totalValid
}

export default part2
