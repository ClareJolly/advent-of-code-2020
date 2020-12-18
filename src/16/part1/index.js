import { getBatches, reformatRules, validateNearby } from '../helpers';

const part1 = (inputData) => {
  const sections = getBatches(inputData);
  sections.rules = reformatRules(sections.rules);

  let { rules, yourticket: your, nearbytickets: nearby } = sections;
  your = your.map((y) => Number(y));
  nearby = nearby.map((n) => n.map((nn) => parseInt(nn)));

  const { invalid, nearbyValidated } = validateNearby(rules, nearby);
  console.log('Invalid', invalid);
  console.log('Valid', nearbyValidated);
  return invalid.reduce((acc, item) => (acc += Number(item)), 0);
};

export default part1;
