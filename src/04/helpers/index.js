const processItem = (item) => {
  const processedItem = item.split(' ');
  return processedItem;
};

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      if (item === '') {
        acc.push([]);
        return acc;
      }

      const processedItem = processItem(item);
      acc[acc.length - 1].push(...processedItem);
      return acc;
    },
    [[]]
  );
  const batchObjects = batches.map((batch) => {
    return batch.reduce((acc, item) => {
      const itemArr = item.split(':');
      acc[itemArr[0]] = itemArr[1];
      return acc;
    }, {});
  });
  return batchObjects;
};

export default getBatches;
