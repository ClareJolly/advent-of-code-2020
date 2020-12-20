import getBatches from '../helpers';

const reverseString = (str) => str.split('').reverse().join('');

const part1 = (inputData) => {
  const batches = getBatches(inputData);
  const tiles = batches.map((t) => ({ tile: t.tile, matches: 0 }));

  batches.forEach((b, i) => {
    batches
      .filter((_, ind) => i !== ind)
      .forEach((bb) => {
        const filtered = bb.edges.filter(
          (e) => b.edges.includes(e) || b.edges.includes(reverseString(e))
        );
        tiles[i].matches += filtered.length;
      });
  });

  return tiles
    .filter((t) => t.matches === 2)
    .reduce((acc, item) => {
      acc *= Number(item.tile);
      return acc;
    }, 1);
};

export default part1;
