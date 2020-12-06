import run from '.';

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run();
    expect(result).toEqual({ part1: 6382, part2: 3197 });
  });
});
