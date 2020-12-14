import run from '.';

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run();
    expect(result).toEqual({ part1: 8570568288597, part2: 3289441921203 });
  });
});
