import part2 from '.'

describe('part 2', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  const arr = ['1721', '979', '366', '299', '675', '1456']
  it('returns the correct value when there is a match', () => {
    const result = part2(arr)

    expect(result).toEqual(241861950)
  })
})
