const formatData = (data) => {
  return data
    .map((rule) => rule.split(' bags contain '))
    .map((r) => ({ container: r[0], inside: [...r[1].split(', ')] }))
    .map((item) => {
      const { container } = item;
      const insideNew =
        item.inside[0] === 'no other bags.'
          ? []
          : item.inside.map((ins) => ({
              number: parseInt(ins.split(' ')[0]),
              colour: `${ins.split(' ')[1]} ${ins.split(' ')[2]}`,
            }));
      return { container, inside: insideNew };
    })
    .map((m) => ({
      ...m,
      bagsInside: m.inside.reduce((acc, itm) => (acc += itm.number), 0),
    }));
};
export { formatData };
