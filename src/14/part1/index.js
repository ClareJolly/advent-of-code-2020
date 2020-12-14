const part1 = (inputData) => {
  const data = inputData.reduce((acc, item) => {
    const val = item.split(' = ');
    if (val[0] === 'mask') {
      acc.push({ mask: val[1], mem: [] });
    } else {
      const memRegex = /mem\[([\d]{1,})\]/g;
      var match = memRegex.exec(val[0]);
      acc.slice(-1)[0].mem.push({ pos: match[1], value: parseInt(val[1]) });
    }
    return acc;
  }, []);
  //   console.dir(data, { depth: null });

  let memory = {};
  let mask = '';

  data.forEach((instruction) => {
    mask = instruction.mask.split('');
    instruction.mem.forEach((m) => {
      let binary = m.value.toString(2).padStart(36, '0').split('');

      for (let i = 0; i < 36; i++) {
        if (mask[i] !== 'X') {
          binary[i] = mask[i];
        }
      }
      memory[m.pos] = binary;
    });
  });
  let sum = 0;
  Object.keys(memory).forEach((key) => {
    let string = memory[key].join('');
    sum += parseInt(string, 2);
  });
  return sum;
};

export default part1;
