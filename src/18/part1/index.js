const operators = {
  '+': function (a, b) {
    return a + b
  },
  '*': function (a, b) {
    return a * b
  },
}

const process = (item) => {
  if (!isNaN(Number(item))) {
    Number(item)
  }
  while (item.match(/\(/)) {
    item = item.replace(/\([^()]+\)/, (match) =>
      process(match.slice(1, match.length - 1))
    )
  }
  while (isNaN(Number(item))) {
    item = item.replace(/(\d+) ([+*]) (\d+)/, (match, a, op, b) =>
      operators[op](parseInt(a), parseInt(b))
    )
  }
  return Number(item)
}

const part1 = (inputData) => {
  let total = 0
  inputData.forEach((c) => {
    total += process(c)
  })

  return total
}

export default part1
