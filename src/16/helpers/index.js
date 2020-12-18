const processItem = (item) => {
  const regex = RegExp('ticket');
  const processedItem = regex.test(item) ? item : item.split(',');

  return processedItem;
};

const reformatRules = (data) => {
  return data.reduce((acc, item) => {
    const rule = item[0].split(':');
    acc[rule[0]] = rule[1]
      .split(' or ')
      .map((r) => r.split('-').map((num) => Number(num)));
    return acc;
  }, {});
};

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      let sectionName = 'rules';
      let newKey;
      if (item === '') {
        return acc;
      }
      const regex = RegExp('ticket');
      const ticketHeading = regex.test(item);
      const processedItem = processItem(item);
      if (ticketHeading) {
        newKey = item.replace(' ', '').replace(':', '');
        acc[newKey] = [];
        sectionName = newKey;
      }
      if (!ticketHeading) {
        const keys = Object.keys(acc);
        const lastKey = keys.slice(-1)[0];
        const toBePushed =
          lastKey === 'yourticket' ? processedItem : [processedItem];
        acc[lastKey].push(...toBePushed);
      }
      return acc;
    },
    { rules: [] }
  );

  return batches;
};

const validateNearby = (rules, nearby) => {
  let invalid = [];
  const rulesList = Object.values(rules);
  const nearbyValidated = nearby.filter((nt) => {
    let valid = 0;
    let validList = [];
    const isAllValid = nt.filter((n) => {
      let localValid = 0;
      rulesList.forEach((r) => {
        if ((n >= r[0][0] && n <= r[0][1]) || (n >= r[1][0] && n <= r[1][1])) {
          // valid++;
          localValid++;
          validList.push(n);
        }
        // return rulesList.length === localValid;
      });
      if (localValid === 0) invalid.push(n);

      return [...new Set(validList)].length === nt.length;
    });
    return isAllValid.length;
  });

  return { invalid, nearbyValidated };
};

export { getBatches, reformatRules, validateNearby };
