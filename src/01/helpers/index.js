const multiplyArrayItems = ({ arr, expectedLength }) => {
  if (arr.length === expectedLength) {
    const total = arr.reduce((acc, item) => {
      return acc * item
    }, 1)

    return total
  }
}

const filteringList = (arr, lookup) => {
  return arr.filter((item) => {
    return arr.includes(lookup - item)
  })
}

const arrToNumbers = (arr) => {
  return arr.map((x) => parseInt(x))
}

const constants = {
  SUMTOTAL: 2020,
}

export { multiplyArrayItems, filteringList, constants, arrToNumbers }
