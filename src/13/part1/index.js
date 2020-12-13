import sortArrayOfObjects from '../../helpers/sortArrayOfObjects';

const part1 = (inputData) => {
  const timestamp = Number(inputData[0]);
  const data = inputData[1]
    .split(',')
    .filter((b) => b !== 'x')
    .map((bus) => Number(bus));

  const summary = data.map((id) => {
    const nextDeparture = timestamp + (id - (timestamp % id));
    return { id, nextDeparture, waitingTime: nextDeparture - timestamp };
  });

  const sorted = sortArrayOfObjects(summary, 'waitingTime');

  return sorted[0].id * sorted[0].waitingTime;
};

export default part1;
