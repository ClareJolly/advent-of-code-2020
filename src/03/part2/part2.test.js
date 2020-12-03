import part2 from '.'

describe('part2', () => {
  it('returns valid for "1-3 a: abcde"', () => {
    const result = part2(['1-3 a: abcde'], 2)

    expect(result).toEqual(1)
  })

  it('returns invalid for "1-3 b: cdefg"', () => {
    const result = part2(['1-3 b: cdefg'], 2)

    expect(result).toEqual(0)
  })

  it('returns valid for "2-9 c: ccccccccc"', () => {
    const result = part2(['2-9 c: ccccccccc'], 2)

    expect(result).toEqual(0)
  })
})
