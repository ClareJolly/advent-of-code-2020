import getBatches from '../helpers'

const part1 = (inputData) => {
  const batches = getBatches(inputData)

  const valid = batches.filter((batch) => {
    const keys = Object.keys(batch)
    return keys.length === 8 || (keys.length === 7 && !keys.includes('cid'))
  })
  return valid.length
}

export default part1
