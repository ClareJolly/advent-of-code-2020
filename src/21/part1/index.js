const getUniqueItems = (arr, key) => {
  return arr.reduce((acc, item) => {
    item[key].forEach((a) => {
      if (!acc.includes(a)) acc.push(a);
    });
    return acc;
  }, []);
};

const part1 = (inputData) => {
  //   const data = inputData.map((d) => {
  //     const regex = /(.*) \(contains (.*)\)/;
  //     const matches = d.match(regex);
  //     return {
  //       ingredients: matches[1].split(' '),
  //       allergens: matches[2].split(', '),
  //     };
  //   });
  //   const allergens = getUniqueItems(data, 'allergens');
  //   const ingredients = getUniqueItems(data, 'ingredients');
  //   const ing = data.reduce((acc, item) => {
  //     item.ingredients.forEach((ingr) => {
  //       if (!acc[ingr]) {
  //         acc[ingr] = 1;
  //       } else {
  //         acc[ingr]++;
  //       }
  //     });
  //     return acc;
  //   }, {});
  //   console.log('🚀 ~ file: index.js ~ line 32 ~ ing ~ ing', ing);
  //   const allergenMatches = allergens.map((a) => {
  //     const filtered = data.filter((d) => d.allergens.includes(a));
  //     const allergenAppearances = filtered.length;
  //     let match = { allergen: a, allergenAppearances, ingredients: [] };
  //     filtered.forEach((f) => {
  //       f.ingredients.forEach((fi) => {
  //         // console.log('🚀 ~ file: index.js ~ line 45 ~ allergenMatches ~ a', a);
  //         // console.log(
  //         //   '🚀 ~ file: index.js ~ line 29 ~ f.ingredients.forEach ~ fi',
  //         //   fi
  //         // );
  //         if (!match.ingredients.includes(fi)) match.ingredients.push(fi);
  //         //     // if (ing[fi]) {
  //         //     //   ing[fi] += 1;
  //         //     // } else {
  //         //     //   ing[fi] = 1;
  //         //     // }
  //       });
  //     });
  //     return match;
  //   });
  //   const safe = [];
  //   console.log(
  //     '🚀 ~ file: index.js ~ line 62 ~ allergenMatches.forEach ~ allergenMatches',
  //     allergenMatches
  //   );
  //   allergenMatches.forEach((a) => {
  //     const keys = a.ingredients.filter((k) => {
  //       return ing[k] >yyy a.allergenAppearances;
  //     });
  //     safe.push(...keys);
  //     // console.log(
  //     //   '🚀 ~ file: index.js ~ line 63 ~ allergenMatches.forEach ~ keys',
  //     //   keys
  //     // );
  //     // return keys;
  //   });
  //   console.log('🚀 ~ file: index.js ~ line 75 ~ part1 ~ safe', safe);
  //   const final = [...new Set(safe)];
  //   console.log('🚀 ~ file: index.js ~ line 80 ~ part1 ~ final', final);
  //   return final.length;
};

export default part1;
