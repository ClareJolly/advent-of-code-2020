import part1 from '.'

describe('part 1', () => {
  it('returns the correct value', () => {
    const arr = ['1721', '979', '366', '299', '675', '1456']
    const result = part1(arr)

    expect(result).toEqual(514579)
  })
})
