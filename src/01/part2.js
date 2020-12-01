const processExpensesBy3 = (expenseData) => {
  const expensesList = expenseData.map((x) => parseInt(x));

  const numbers = expensesList.filter((item) => {
    const lookup = 2020 - item;
    const filtered = expensesList.filter((item2) => {
      return expensesList.includes(lookup - item2);
    });

    if (filtered.length) {
      filtered.push(item);
      return filtered;
    }
  });
  if (numbers.length === 3) {
    const total = numbers.reduce((acc, item) => {
      return acc * item;
    }, 1);

    console.log('part 2 ====>', total);
    return total;
  }
};

export default processExpensesBy3;
