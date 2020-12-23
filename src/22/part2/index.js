import { getBatches } from '../helpers';

const getWinningAndLosing = (currentPlayer, nextPlayer, data) => {
  return data[currentPlayer].cards[0] > data[nextPlayer].cards[0]
    ? { winning: currentPlayer, losing: nextPlayer }
    : { winning: nextPlayer, losing: currentPlayer };
};

const checkDeckLog = (deckLog, currentHand, currentIndex) => {
  return Boolean(deckLog[currentIndex].cards.includes(currentHand.join('')));
};
const part2 = (inputData) => {
  const data = getBatches(inputData);
  console.log('🚀 ~ file: index.js ~ line 14 ~ part2 ~ data', data);
  const deckLog = data.map((d) => ({ player: d.player, cards: [] }));
  console.log('🚀 ~ file: index.js ~ line 6 ~ part2 ~ deckLog', deckLog);
  let stop = false;
  let g = 0;
  while (!stop) {
    for (
      let i = 0;
      i < data.length &&
      data.every((p) => {
        return p.cards.length;
      });
      i++
    ) {
      g++;
      console.log('🚀 ~ file: index.js ~ line 45 ~ part2 ~ g', g);
      const nextPlayer = i === data.length - 1 ? 0 : i + 1;
      if (
        checkDeckLog(deckLog, data[i].cards, i) ||
        checkDeckLog(deckLog, data[nextPlayer].cards, nextPlayer)
      ) {
        stop = true;
      }
      deckLog[i].cards.push(data[i].cards.join(''));
      deckLog[nextPlayer].cards.push(data[nextPlayer].cards.join(''));

      const { winning, losing } = getWinningAndLosing(i, nextPlayer, data);
      data[winning].cards.push(data[winning].cards[0], data[losing].cards[0]);
      data[winning].cards.shift();
      data[losing].cards.shift();
      console.log('🚀 ~ file: index.js ~ line 43 ~ part2 ~ data', data);
    }
    // x++;
  }
};

export default part2;
