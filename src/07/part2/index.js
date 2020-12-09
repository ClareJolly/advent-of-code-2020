import { formatData } from '../helpers';

const part2 = (inputData) => {
  let testInput = [
    'shiny gold bags contain 2 dark red bags.',
    'dark red bags contain 2 dark orange bags.',
    'dark orange bags contain 2 dark yellow bags.',
    'dark yellow bags contain 2 dark green bags.',
    'dark green bags contain 2 dark blue bags.',
    'dark blue bags contain 2 dark violet bags.',
    'dark violet bags contain no other bags.',
  ];
  testInput = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
  ];

  const data = formatData(testInput);
  //   console.dir(data, { depth: null });

  let i = 0;
  let lookFor = ['shiny gold'];
  let finalList = [];
  while (i >= 0 && lookFor.length) {
    // console.log('🚀 ~ file: index.js ~ line 32 ~ part2 ~ lookFor', lookFor);
    const filtered = data
      .filter((d) => lookFor.includes(d.container))
      .map((m) => ({
        ...m,
        ...m.inside.reduce(
          (acc, item) => {
            // acc.totalInside += item.number;
            const bagsInsideFromMain = data.filter(
              (d) => d.container === item.colour
            )[0].bagsInside;
            acc.insideList.push(item.colour);
            acc.inside.push({ ...item, bagsInside: bagsInsideFromMain });
            acc.inside = [...new Set(acc.inside)];

            return acc;
          },
          { insideList: [], inside: [] }
        ),
      }));

    lookFor = filtered.reduce((acc, item) => {
      acc.push(...item.insideList);
      return acc;
    }, []);

    finalList.push(...filtered);
    i++;
  }
  console.log('==========finalList=============');
  console.dir(finalList, { depth: null });

  //   let sum = 1 + 2; // shiny gold contains 1 dark olive and 2 vibrant plum
  //   sum += 1 * 7; // dark olive has 7 inside
  //   sum += 2 * 11; // vibrant plum has 11
  //   console.log('🚀 ~ file: index.js ~ line 68 ~ part2 ~ sum', sum);

  //   // finalList[0].bagsInside
  //   // finalList[0].inside[0].number * finalList[0].inside[0].bagsInside
  //   // finalList[0].inside[1].number * finalList[0].inside[1].bagsInside

  //   sum = finalList[0].bagsInside;
  //   sum += finalList[0].inside[0].number * finalList[0].inside[0].bagsInside;
  //   sum += finalList[0].inside[1].number * finalList[0].inside[1].bagsInside;
  //   console.log('🚀 ~ file: index.js ~ line 68 ~ part2 ~ sum', sum);

  let sum = 2 + 2 * 2;
  sum += 2 + 2 * 2;
  sum += 2 + 2 * 2;
  sum += 2 + 2 * 2;
  sum += 2 + 2 * 2;
  sum += 2 + 2 * 2;
  console.log('🚀 ~ file: index.js ~ line 84 ~ part2 ~ sum', sum);

  let final = 0;
  finalList.forEach((f) => {
    const reduced = f.inside.reduce((acc, item) => {
      acc += item.number * item.bagsInside;
      return acc;
    }, 0);
    if (reduced > 0) {
      final += f.bagsInside;

      final += reduced;
    }
  });
  return final;
};

export default part2;
