const part1 = (inputData) => {
  const testInput = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
    'dotted orange bags contain 5 dark orange bags.',
  ];

  const data = inputData
    .map((rule) => rule.split(' bags contain '))
    .map((r) => ({ container: r[0], inside: [...r[1].split(', ')] }));

  const mapped = data.map((item) => {
    const { container, inside } = item;
    const insideNew =
      item.inside[0] === 'no other bags.'
        ? []
        : item.inside.map((ins) => ({
            number: parseInt(ins.split(' ')[0]),
            colour: `${ins.split(' ')[1]} ${ins.split(' ')[2]}`,
          }));
    return { container, inside: insideNew };
  });

  let i = 0;
  let lookFor = ['shiny gold'];
  let finalList = [];
  while (i >= 0 && lookFor.length) {
    const filtered = mapped
      .filter(
        (m) => m.inside.filter((ins) => lookFor.includes(ins.colour)).length
      )
      .map((itm) => itm.container);
    i++;
    finalList.push(...filtered);
    lookFor = filtered;
  }
  return [...new Set(finalList)].length;
};

export default part1;
