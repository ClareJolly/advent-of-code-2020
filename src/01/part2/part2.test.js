import { filteringList, multiplyArrayItems, arrToNumbers } from '../helpers';

jest.mock('../helpers');
filteringList.mockReturnValue([2000, 18, 2]);
multiplyArrayItems.mockReturnValue(2000 * 18 * 2);
const mockArray = [2000, 18, 2, 19, 222, 34, 52];
arrToNumbers.mockReturnValue(mockArray);

import part2 from '.';

describe('part 2', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('returns the correct value when there is a match', () => {
    const arr = [2000, 18, 2, 19, 222, 34, 52];
    const result = part2(arr);

    expect(arrToNumbers).toHaveBeenCalledWith(arr);
    expect(filteringList).toHaveBeenCalledTimes(7);
    expect(multiplyArrayItems).toHaveBeenCalledWith({
      arr: [2000, 18, 2, 19, 222, 34, 52],
      expectedLength: 3,
      part: 2,
    });

    expect(result).toEqual(2000 * 18 * 2);
  });

  it('returns the correct value when there is no match', () => {
    filteringList.mockReturnValue([]);
    arrToNumbers.mockReturnValue(mockArray);

    const arr = [2000, 18, 2, 19, 222, 34, 52];
    const result = part2(arr);

    expect(multiplyArrayItems).toHaveBeenCalledWith({
      arr: [],
      expectedLength: 3,
      part: 2,
    });

    expect(result).toBeUndefined();
  });
});
