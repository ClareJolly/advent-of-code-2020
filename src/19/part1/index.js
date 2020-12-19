const countMatches = (msgs, rls, cb) =>
  msgs.reduce((acc, current, index) => (cb(current, index) ? acc + 1 : acc), 0);
const formatRule = (rule) => {
  const a = rule.split(':');
  let formatted = { [a[0]]: undefined };
  const ruleMatch = RegExp(/(("(\D{1,})")|((( \d{1,}){1,}( \|)?){1,}))/);
  const matches = a[1].match(ruleMatch);
  const value = (matches[3] || matches[4]).trim();
  let val = value;
  if (val.length > 1) {
    val = val.split(' | ').map((m) => m.split(' ').map((n) => Number(n)));
  }
  formatted[a[0]] = val;

  return formatted;
};
const part1 = (inputData) => {
  const ruleTest = RegExp(/\d{1,}:/);
  const rules = inputData
    .filter((rule) => ruleTest.test(rule))
    .reduce((acc, item) => ({ ...acc, ...formatRule(item) }), {});

  const messages = inputData.filter((rule) => !ruleTest.test(rule));

  const matchRule = (str, ruleIdx) => {
    const rule = rules[ruleIdx];
    if (typeof rule === 'string') {
      if (str.charAt(0) === rule) return [true, [str.substring(1)]];
      return [false];
    }
    const rests = new Set();
    for (const subrule of rule) {
      let left = [str];
      for (const subsubrule of subrule) {
        const nextLeft = new Set();
        for (const pos of left) {
          const [success, possible] = matchRule(pos, subsubrule);
          if (success) possible.forEach((v) => nextLeft.add(v));
        }
        left = [...nextLeft];
      }
      left.forEach((v) => rests.add(v));
    }
    if (rests.size) return [true, [...rests]];
    return [false];
  };

  return countMatches(messages, rules, (m) => {
    const [success, rests] = matchRule(m, 0, rules);
    return success && rests.some((r) => r.length === 0);
  });
};
export default part1;
