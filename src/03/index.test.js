import run from '.';

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run();
    expect(result).toEqual({ part1: 162, part2: 3064612320 });
  });
});
