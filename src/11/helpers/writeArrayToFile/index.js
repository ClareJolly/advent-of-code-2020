import fs from 'fs';

const writeArrayToFile = (filepath, data) => {
  const fileData = data
    .map((d) => {
      return d.map((s) => {
        return s.symbol;
      });
    })
    .map((d2) => d2.join(''));
  fs.writeFileSync(filepath, String(fileData.join('\n')));
};

export default writeArrayToFile;
