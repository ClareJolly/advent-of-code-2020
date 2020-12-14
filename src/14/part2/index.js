const part2 = (inputData) => {
  const data = inputData.reduce((acc, item) => {
    const val = item.split(' = ');
    if (val[0] === 'mask') {
      acc.push({ mask: val[1], mem: [] });
    } else {
      const memRegex = /mem\[([\d]{1,})\]/g;
      var match = memRegex.exec(val[0]);
      const pos = parseInt(match[1]);
      acc.slice(-1)[0].mem.push({ pos: pos, value: parseInt(val[1]) });
    }
    return acc;
  }, []);

  let mask = '';
  let memory = {};

  data.forEach((instruction) => {
    mask = instruction.mask.split('');
    instruction.mem.forEach((m) => {
      let binKey = m.pos.toString(2).padStart(36, 0).split('');
      for (let i = 0; i < 36; i++) {
        if (mask[i] === 'X' || mask[i] === '1') {
          binKey[i] = mask[i];
        }
      }
      let checking = 1;
      let keyOptions = [binKey.map((b) => b)];
      while (checking !== 0) {
        checking = 0;
        keyOptions.forEach((key, index) => {
          let x = key.indexOf('X');
          if (x !== -1) {
            key[x] = '0';
            keyOptions.push(key.map((k) => k));
            key[x] = '1';
            keyOptions.push(key.map((k) => k));
            checking++;
            keyOptions.splice(index, 1);
          }
        });
      }
      keyOptions.forEach((key) => {
        let dec = parseInt(key.join(''), 2);
        memory[dec] = m.value;
      });
    });
  });
  let sum = 0;
  Object.keys(memory).forEach((key) => {
    sum += memory[key];
  });
  return sum;
};

export default part2;
