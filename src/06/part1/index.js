import batchByBlankLines from '../../helpers/batchByBlankLines';

const part1 = (inputData) => {
  const batches = batchByBlankLines(inputData);
  console.log('🚀 ~ file: index.js ~ line 5 ~ part1 ~ batches', batches);

  const summariseGroup = batches.map((b) => {
    const allBatches = b.reduce((acc, item) => {
      acc = [...acc, ...item.split('')];
      return acc;
    }, []);
    return [...new Set(allBatches)];
  });

  console.log(
    '🚀 ~ file: index.js ~ line 13 ~ part1 ~ summariseGroup',
    summariseGroup
  );

  return summariseGroup.reduce((acc, item) => {
    return acc + item.length;
  }, 0);
};

export default part1;
