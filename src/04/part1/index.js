const processItem = (item) => {
  const processedItem = item.split(' ')
  return processedItem
}

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      if (item === '') {
        acc.push([])
        return acc
      }

      const processedItem = processItem(item)
      acc[acc.length - 1].push(...processedItem)
      return acc
    },
    [[]]
  )
  const batchObjects = batches.map((batch) => {
    return batch.reduce((acc, item) => {
      const itemArr = item.split(':')
      acc[itemArr[0]] = itemArr[1]
      return acc
    }, {})
  })
  return batchObjects
}

const part1 = (inputData) => {
  const batches = getBatches(inputData)

  const valid = batches.filter((batch) => {
    const keys = Object.keys(batch)
    return keys.length === 8 || (keys.length === 7 && !keys.includes('cid'))
  })
  return valid.length
}

export default part1
