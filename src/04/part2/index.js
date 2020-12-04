import getBatches from '../helpers';

const validateYears = (val, low, high) => {
  return val.length === 4 && parseInt(val) >= low && parseInt(val) <= high;
};

const validateHairColour = (val) => {
  const regex = RegExp(/#([a-f]|[0-9]){6}/);
  return regex.test(val);
};

const validateHeight = (val) => {
  const mainRegex = RegExp(/[0-9]*(cm|in)/);
  if (!mainRegex.test(val)) {
    return false;
  }

  const numbers = val.match(/[0-9]*/)[0];
  const metric = val.match(/cm|in/)[0];

  return (
    (metric === 'in' && numbers >= 59 && numbers <= 76) ||
    (metric === 'cm' && numbers >= 150 && numbers <= 193)
  );
};

const validateEyeColour = (val) =>
  ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);

const validatePassportId = (val) => {
  const regex = RegExp(/^[0-9]{9}$/);
  if (!regex.test(val)) return false;

  return true;
};

const validationRules = {
  byr: (val) => validateYears(val, '1920', '2002'),
  iyr: (val) => validateYears(val, '2010', '2020'),
  eyr: (val) => validateYears(val, '2020', '2030'),
  hgt: (val) => validateHeight(val),
  hcl: (val) => validateHairColour(val),
  ecl: (val) => validateEyeColour(val),
  pid: (val) => validatePassportId(val),
  cid: () => true,
};

const validate = (item) => {
  const itemKey = Object.keys(item)[0];
  return validationRules[itemKey](item[itemKey]);
};

const part2 = (inputData) => {
  const batches = getBatches(inputData, 'cid');
  const excludeCid = batches.map((b) => {
    delete b['cid'];
    return b;
  });

  const valid = excludeCid.filter((batch) => {
    const keys = Object.keys(batch);
    const validCheck = keys.every((k) => validate({ [k]: batch[k] }));
    return validCheck && keys.length === 7;
  });
  return valid.length;
};

export default part2;
export { validate };
