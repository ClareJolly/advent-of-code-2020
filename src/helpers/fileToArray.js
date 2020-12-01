import fs from 'fs';

const fileToArray = (filepath) => {
  return fs.readFileSync(filepath, 'utf-8').split('\n');
};

export default fileToArray;
