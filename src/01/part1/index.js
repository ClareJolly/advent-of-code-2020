import {
  filteringList,
  multiplyArrayItems,
  constants,
  arrToNumbers,
} from '../helpers'

const processExpenses = (expenseData) => {
  const expensesList = arrToNumbers(expenseData)

  const numbers = filteringList(expensesList, constants.SUMTOTAL)

  return multiplyArrayItems({ arr: numbers, expectedLength: 2 })
}

export default processExpenses
