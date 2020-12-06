import part2 from '.';

describe('part2', () => {
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
    const result = part2(testData);
    expect(result).toEqual(6);
  });
});
