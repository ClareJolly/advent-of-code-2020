import batchByBlankLines from '../../helpers/batchByBlankLines';

const part1 = (inputData) => {
  const batches = batchByBlankLines(inputData);

  const summariseGroup = batches.map((b) => {
    const allBatches = b.reduce((acc, item) => {
      acc = [...acc, ...item.split('')];
      return acc;
    }, []);
    return [...new Set(allBatches)];
  });

  return summariseGroup.reduce((acc, item) => {
    return acc + item.length;
  }, 0);
};

export default part1;
