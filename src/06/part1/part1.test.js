import part1 from '.';

describe('part1', () => {
  const testData = [
    'abc',
    '',
    'a',
    'b',
    'c',
    '',
    'ab',
    'ac',
    '',
    'a',
    'a',
    'a',
    'a',
    '',
    'b',
  ];

  it('returns the expected values', () => {
    const result = part1(testData);
    expect(result).toEqual(11);
  });
});
