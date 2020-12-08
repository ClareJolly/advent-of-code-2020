const part1 = (inputData) => {
  const testData = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ]

  const data = inputData
    .map((d) => d.split(' '))
    .map((dd) => [dd[0], parseInt(dd[1])])
  console.log('  ~ file: index.js ~ line 15 ~ part1 ~ data', data)

  let accumulator = 0
  let runNext = 0
  let runList = []
  const run = (runNext) => {
    runList.push(runNext)
    if (data[runNext][0] === 'nop') {
      runNext++
      if (runList.length && runList.includes(runNext)) return
      run(runNext)
    }
    if (data[runNext][0] === 'acc') {
      if (runList.length && runList.includes(runNext + 1)) return
      accumulator += data[runNext][1]
      runNext++
      run(runNext)
    }
    if (data[runNext][0] === 'jmp') {
      runNext += data[runNext][1]
      if (runList.length && runList.includes(runNext)) return
      run(runNext)
    }
  }
  run(runNext)
  return accumulator
}

export default part1
