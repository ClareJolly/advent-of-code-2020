import getBatches from '../helpers';

const operation = (list1, list2, isUnion = false) =>
  list1.filter((a) => isUnion === list2.some((b) => a.userId === b.userId));

// Following functions are to be used:
const inBoth = (list1, list2) => operation(list1, list2, true);

const part1 = (inputData) => {
  const batches = getBatches(inputData);
  const tiles = batches.map((t) => ({ tile: t.tile, matches: 0 }));

  batches.forEach((b, i) => {
    batches
      .filter((_, ind) => i !== ind)
      .forEach((bb) => {
        const filtered = bb.edges.filter(
          (e) =>
            b.edges.includes(e) ||
            b.edges.includes(e.split('').reverse().join(''))
        );
        tiles[i].matches += filtered.length;
      });
  });

  const filtered = tiles.filter((t) => t.matches === 2);

  return filtered.reduce((acc, item) => {
    acc *= Number(item.tile);
    return acc;
  }, 1);
};

export default part1;
