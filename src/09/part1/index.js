const part1 = (inputData) => {
  const testData = [
    '35',
    '20',
    '15',
    '25',
    '47',
    '40',
    '62',
    '55',
    '65',
    '95',
    '102',
    '117',
    '150',
    '182',
    '127',
    '219',
    '299',
    '277',
    '309',
    '576',
  ]
  const preambleLength = 25
  const data = inputData.map((x) => Number(x))

  const validList = []
  const invalidList = []
  for (let i = preambleLength; i < data.length; i++) {
    const toCheck = data[i]
    const sliced = data.slice(i - preambleLength, i)
    const localValid = []
    sliced.forEach((s) => {
      const matchFound = sliced.includes(toCheck - s)
      if (matchFound) {
        if (!validList.includes(toCheck)) validList.push(toCheck)
        if (!localValid.includes(toCheck)) localValid.push(toCheck)
      } else {
      }
    })
    if (!localValid.length) invalidList.push(toCheck)
  }
  return invalidList[0]
}

export default part1
