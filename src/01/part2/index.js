import { multiplyArrayItems, filteringList, constants } from '../helpers'
import arrToNumbers from '../../helpers/arrToNumbers'

const processExpensesBy3 = (expenseData) => {
  const expensesList = arrToNumbers(expenseData)

  const numbers = expensesList.filter((item) => {
    const lookup = constants.SUMTOTAL - item
    const filtered = filteringList(expensesList, lookup)

    if (filtered.length) {
      filtered.push(item)
      return filtered
    }
  })

  return multiplyArrayItems({ arr: numbers, expectedLength: 3 })
}

export default processExpensesBy3
