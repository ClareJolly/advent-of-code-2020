import { getBatches, reformatRules, validateNearby } from '../helpers';

const part2 = (inputData) => {
  const sections = getBatches(inputData);
  sections.rules = reformatRules(sections.rules);

  let { rules, yourticket: your, nearbytickets: nearby } = sections;
  your = your.map((y) => Number(y));
  nearby = nearby.map((n) => n.map((nn) => parseInt(nn)));

  const { invalid, nearbyValidated } = validateNearby(rules, nearby);
  console.log('Invalid', invalid);
  console.log('Valid', nearbyValidated);
  const rulesList = Object.values(rules);
  const matches = [];
  rulesList.filter((r, i) => {
    console.log('rrrrrrrrrrrrr');
    let valid = 0;
    let validIndexes = [];
    nearbyValidated.forEach((nv) => {
      console.log('nvnvnvnvnvnvnv');
      let localValid = 0;
      let localValidIndexes = [];
      nv.forEach((n, ni) => {
        console.log('nnnnnnnnnnnn');
        if ((n >= r[0][0] && n <= r[0][1]) || (n >= r[1][0] && n <= r[1][1])) {
          //   localValid++;
          localValidIndexes.push(ni);
        }
      });
      console.log(
        '🚀 ~ file: index.js ~ line 26 ~ nv.forEach ~ localValidIndexes',
        localValidIndexes
      );
      if (localValid === 3) {
        validIndexes.push(localValidIndexes);
        valid++;
      }
    });
    if (valid === 3) matches.push({ rule: i, validIndexes });
    console.log(
      '🚀 ~ file: index.js ~ line 17 ~ rulesList.forEach ~ valid',
      valid
    );
  });
  console.dir(matches, { depth: null });
};

export default part2;
