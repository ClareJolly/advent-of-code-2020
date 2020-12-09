const swapJmpAndNop = (data) => {
  let replaced = [];
  for (let i = 0; i < data.length; i++) {
    const dataCopy = JSON.parse(JSON.stringify(data));

    let code = dataCopy[i].code;

    if (code === 'jmp') {
      dataCopy[i].code = 'nop';
      replaced.push(dataCopy);
    } else if (code === 'nop') {
      dataCopy[i].code = 'jmp';
      replaced.push(dataCopy);
    }
  }
  return replaced;
};

const validate = (check) => {
  let accumulator = 0;
  let runList = [];

  for (let i = 0; i < check.length; ) {
    if (runList.includes(i)) {
      return 0;
    }

    let code = check[i].code;
    let number = check[i].number;
    runList.push(i);

    if (code === 'acc') {
      accumulator += number;
      i++;
    } else if (code === 'jmp') {
      i += number;
    } else {
      i++;
    }
  }

  return accumulator;
};

const part2 = (inputData) => {
  const data = inputData.map((val) => {
    const splitData = val.split(' ');
    return { code: splitData[0], number: Number(splitData[1]) };
  });

  const replaced = swapJmpAndNop(data);

  for (let code of replaced) {
    let value = validate(code);
    if (value > 0) {
      return value;
    }
  }
};

export default part2;
