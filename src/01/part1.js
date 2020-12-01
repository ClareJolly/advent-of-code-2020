import { filteringList, multiplyArrayItems, constants } from './helpers';

const processExpenses = (expenseData) => {
  const expensesList = expenseData.map((x) => parseInt(x));

  const numbers = filteringList(expensesList, constants.SUMTOTAL);

  multiplyArrayItems({ part: 1, arr: numbers, expectedLength: 2 });
};

export default processExpenses;
