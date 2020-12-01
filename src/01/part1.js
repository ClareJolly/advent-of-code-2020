const processExpenses = (expenseData) => {
  const expensesList = expenseData.map((x) => parseInt(x));

  const numbers = expensesList.filter((item) =>
    expensesList.includes(2020 - item)
  );

  if (numbers.length === 2) {
    const total = numbers.reduce((acc, item) => {
      return acc * item;
    }, 1);

    console.log('part 1 ====>', total);
    return total;
  }
};

export default processExpenses;
