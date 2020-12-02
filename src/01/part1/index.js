import { filteringList, multiplyArrayItems, constants } from '../helpers'
import arrToNumbers from '../../helpers/arrToNumbers'

const processExpenses = (expenseData) => {
  const expensesList = arrToNumbers(expenseData)

  const numbers = filteringList(expensesList, constants.SUMTOTAL)

  return multiplyArrayItems({ arr: numbers, expectedLength: 2 })
}

export default processExpenses
