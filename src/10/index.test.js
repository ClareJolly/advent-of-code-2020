import run from '.';

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run();
    expect(result).toEqual({ part1: 2312, part2: 12089663946752 });
  });
});
