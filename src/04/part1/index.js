import getBatches from '../helpers';

const part1 = (inputData) => {
  const batches = getBatches(inputData);
  const excludeCid = batches.map((b) => {
    delete b['cid'];
    return b;
  });
  const valid = excludeCid.filter((batch) => {
    const keys = Object.keys(batch);
    return keys.length === 7;
  });
  return valid.length;
};

export default part1;
