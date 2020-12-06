import { getAllSeats } from '../part1';

const part2 = (inputData) => {
  const seats = getAllSeats(inputData).sort();
  const newSeats = seats.map((s) => Math.floor(s));

  return newSeats.filter((g, i) => g - newSeats[i - 1] === 2)[0] - 1;
};

export default part2;
