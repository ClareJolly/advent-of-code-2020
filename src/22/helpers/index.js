const processItem = (item) => {
  const processedItem = item.split('');
  return processedItem;
};

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      if (item === '') {
        acc.push({});
        return acc;
      }

      if (!acc[acc.length - 1].player) {
        acc[acc.length - 1].player = item
          .replace('Player ', '')
          .replace(':', '');
        acc[acc.length - 1].cards = [];
      } else {
        acc[acc.length - 1].cards.push(Number(item));
      }
      return acc;
    },
    [{}]
  );
  return batches;
};

export { getBatches };
