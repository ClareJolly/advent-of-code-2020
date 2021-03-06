const nextTimestamp = (initialTimestamp, i, nextBus) => {
  while ((initialTimestamp + nextBus.offset) % nextBus.busId != 0) {
    initialTimestamp += i;
  }
  return initialTimestamp;
};

const part2 = (inputData) => {
  const data = inputData[1]
    .split(',')
    .map((id, index) => ({ busId: parseInt(id), offset: index }))
    .filter((b) => !isNaN(b.busId));

  let timestamp = 0;
  let i = 1;

  for (let bus = 1; bus < data.length; bus++) {
    i *= data[bus - 1].busId;

    timestamp = nextTimestamp(timestamp, i, data[bus]);
  }

  return timestamp;
};

// const part2 = (inputData) => {
//   const data = inputData[1].split(',').map((bus) => {
//     return bus !== 'x' ? BigInt(bus) : bus;
//   });

//   let tempOffset = 0;
//   const withOffsets = data.reduce((acc, item, index) => {
//     let idDetails = {};
//     if (index > 0) tempOffset++;
//     if (Boolean(item !== 'x')) {
//       idDetails = [BigInt(item), BigInt(tempOffset)];
//     }
//     if (Boolean(item === 'x')) {
//       return acc;
//     }
//     acc.push(idDetails);
//     return acc;
//   }, []);

//   let offsetMatch = false;
//   let i = 0;
//   let sum = 0n;
//   while (!Boolean(offsetMatch)) {
//     sum += BigInt(withOffsets[0][0]);
//     const matches = withOffsets.slice(1, withOffsets.length).filter((bus) => {
//       console.log(typeof bus[0]);
//       console.log(typeof bus[1]);
//       return (sum % bus[0]) + bus[1] === bus[0];
//     });
//     if (matches.length === withOffsets.length - 1) offsetMatch = sum;
//     i++;
//   }
//   return sum;
// };

export default part2;
