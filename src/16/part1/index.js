import getBatches from '../helpers';

const reformatRules = (data) => {
  return data.reduce((acc, item) => {
    const rule = item[0].split(':');
    acc[rule[0]] = rule[1]
      .split(' or ')
      .map((r) => r.split('-').map((num) => Number(num)));
    return acc;
  }, {});
};

const part1 = (inputData) => {
  const sections = getBatches(inputData);
  sections.rules = reformatRules(sections.rules);

  let { rules, yourticket: your, nearbytickets: nearby } = sections;
  your = your.map((y) => Number(y));
  nearby = nearby.map((n) => n.map((nn) => parseInt(nn)));

  let invalid = [];
  const rulesList = Object.values(rules);
  const nearbyValidated = nearby.filter((nt) => {
    let valid = 0;
    const hasInvalid = nt.filter((n) => {
      let localValid = 0;
      rulesList.forEach((r) => {
        if ((n >= r[0][0] && n <= r[0][1]) || (n >= r[1][0] && n <= r[1][1])) {
          // valid++;
          localValid++;
        }
        return rulesList.length === localValid;
      });
      if (localValid === 0) invalid.push(n);
    });
    return Boolean(valid !== nt.length);
  });
  console.log('🚀 ~ file: index.js ~ line 20 ~ part1 ~ invalid', invalid);

  return invalid.reduce((acc, item) => (acc += Number(item)), 0);
};

export default part1;
