import { filteringList, multiplyArrayItems, arrToNumbers } from '../helpers';

jest.mock('../helpers');
filteringList.mockReturnValue([2000, 20]);
multiplyArrayItems.mockReturnValue(2000 * 20);
const mockArray = [2000, 20, 19, 222, 34, 52];
arrToNumbers.mockReturnValue(mockArray);

import part1 from '.';

describe('part 1', () => {
  it('returns the correct value', () => {
    const arr = ['2000', '20', '19', '222', '34', '52'];
    const result = part1(arr);

    expect(arrToNumbers).toHaveBeenCalledWith(arr);
    expect(filteringList).toHaveBeenCalledWith(mockArray, 2020);
    expect(multiplyArrayItems).toHaveBeenCalledWith({
      arr: [2000, 20],
      expectedLength: 2,
      part: 1,
    });
    expect(result).toEqual(2000 * 20);
  });
});
