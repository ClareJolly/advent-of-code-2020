import part1, { getRows, getColumns } from '.';

describe('part1', () => {
  describe('getRows', () => {
    it('returns the correct row for FBFBBFFRLR', () => {
      const result = getRows('FBFBBFFRLR', 128);
      expect(result).toEqual(44);
    });
    it('returns the correct row for BFFFBBFRRR', () => {
      const result = getRows('BFFFBBFRRR', 128);
      expect(result).toEqual(70);
    });
    it('returns the correct row for FFFBBBFRRR', () => {
      const result = getRows('FFFBBBFRRR', 128);
      expect(result).toEqual(14);
    });
    it('returns the correct row for BBFFBBFRLL', () => {
      const result = getRows('BBFFBBFRLL', 128);
      expect(result).toEqual(102);
    });
  });

  describe('getColumns', () => {
    it('returns the correct row for FBFBBFFRLR', () => {
      const result = getColumns('FBFBBFFRLR', 8);
      expect(result).toEqual(5);
    });
    it('returns the correct row for BFFFBBFRRR', () => {
      const result = getColumns('BFFFBBFRRR', 8);
      expect(result).toEqual(7);
    });
    it('returns the correct row for FFFBBBFRRR', () => {
      const result = getColumns('FFFBBBFRRR', 8);
      expect(result).toEqual(7);
    });
    it('returns the correct row for BBFFBBFRLL', () => {
      const result = getColumns('BBFFBBFRLL', 8);
      expect(result).toEqual(4);
    });
  });

  describe('part1', () => {
    it('returns the correcseat for FBFBBFFRLR', () => {
      const result = part1(['FBFBBFFRLR']);
      expect(result).toEqual([357]);
    });
    it('returns the correcseat for BFFFBBFRRR', () => {
      const result = part1(['BFFFBBFRRR']);
      expect(result).toEqual([567]);
    });
    it('returns the correcseat for FFFBBBFRRR', () => {
      const result = part1(['FFFBBBFRRR']);
      expect(result).toEqual([119]);
    });
    it('returns the correcseat for BBFFBBFRLL', () => {
      const result = part1(['BBFFBBFRLL']);
      expect(result).toEqual([820]);
    });
  });
});
