const processItem = (item) => {
  const regex = RegExp('ticket')
  const processedItem = regex.test(item) ? item : item.split(',')

  return processedItem
}

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      console.log('  ~ file: index.js ~ line 11 ~ getBatches ~ acc', acc)
      let sectionName = 'rules'
      let newKey
      if (item === '') {
        // acc.push({})
        return acc
      }
      const regex = RegExp('ticket')
      const ticketHeading = regex.test(item)
      const processedItem = processItem(item)
      console.log(
        '  ~ file: index.js ~ line 21 ~ getBatches ~ ticketHeading',
        ticketHeading
      )
      if (ticketHeading) {
        console.log('===========')
        newKey = item.replace(' ', '')
        acc[newKey] = []
        sectionName = newKey
      }
      console.log(
        '  ~ file: index.js ~ line 30 ~ getBatches ~ acc[acc.length - 1][sectionName]',
        acc[sectionName]
      )
      if (!ticketHeading) {
        const keys = Object.keys(acc)
        const lastKey = keys.slice(-1)[0]
        acc[lastKey].push(processedItem)
      }
      return acc
    },
    { rules: [] }
  )
  // const batchObjects = batches.map((batch) => {
  //   return batch.reduce((acc, item) => {
  //     const itemArr = item.split(':')
  //     acc[itemArr[0]] = itemArr[1]
  //     return acc
  //   }, {})
  // })
  // return batchObjects
  return batches
}

export default getBatches
