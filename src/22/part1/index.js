import { getBatches } from '../helpers';

const getWinningAndLosing = (currentPlayer, nextPlayer, data) => {
  return data[currentPlayer].cards[0] > data[nextPlayer].cards[0]
    ? { winning: currentPlayer, losing: nextPlayer }
    : { winning: nextPlayer, losing: currentPlayer };
};

const part1 = (inputData) => {
  const data = getBatches(inputData);
  let x = 1;
  let g = 1;
  while (
    data.every((p) => {
      return p.cards.length;
    })
  ) {
    for (
      let i = 0;
      i < data.length &&
      data.every((p) => {
        return p.cards.length;
      });
      i++
    ) {
      g++;
      const nextPlayer = i === data.length - 1 ? 0 : i + 1;
      const { winning, losing } = getWinningAndLosing(i, nextPlayer, data);
      data[winning].cards.push(data[winning].cards[0], data[losing].cards[0]);
      data[winning].cards.shift();
      data[losing].cards.shift();
    }
    x++;
  }
  return data
    .filter((d) => d.cards.length)[0]
    .cards.reverse()
    .reduce((acc, item, index) => {
      acc += (index + 1) * item;
      return acc;
    }, 0);
};

export default part1;
