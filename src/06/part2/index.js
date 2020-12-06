import batchByBlankLines from '../../helpers/batchByBlankLines';

const part2 = (inputData) => {
  const batches = batchByBlankLines(inputData);
  const summariseGroup = batches.map((b) => {
    const all = b.reduce((acc, item) => {
      acc = [...acc, item.split('')];
      return acc;
    }, []);
    const intersection = all.reduce((a, arr) =>
      a.filter((num) => arr.includes(num))
    );
    return intersection.reduce((acc, item) => {
      return acc + item.length;
    }, 0);
  });
  return summariseGroup.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

export default part2;
