import mock from 'mock-fs';

mock({
  'path/to/textList.txt': Buffer.from('1\n2\n3'),
});

import fileToArray from '.';

describe('fileToArray', () => {
  it('returns the expected data', () => {
    expect(fileToArray('path/to/textList.txt')).toEqual(['1', '2', '3']);
  });
});
