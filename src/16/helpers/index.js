const processItem = (item) => {
  const regex = RegExp('ticket');
  const processedItem = regex.test(item) ? item : item.split(',');

  return processedItem;
};

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      let sectionName = 'rules';
      let newKey;
      if (item === '') {
        return acc;
      }
      const regex = RegExp('ticket');
      const ticketHeading = regex.test(item);
      const processedItem = processItem(item);
      if (ticketHeading) {
        newKey = item.replace(' ', '').replace(':', '');
        acc[newKey] = [];
        sectionName = newKey;
      }
      if (!ticketHeading) {
        const keys = Object.keys(acc);
        const lastKey = keys.slice(-1)[0];
        const toBePushed =
          lastKey === 'yourticket' ? processedItem : [processedItem];
        acc[lastKey].push(...toBePushed);
      }
      return acc;
    },
    { rules: [] }
  );
  return batches;
};

export default getBatches;
