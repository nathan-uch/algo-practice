import ProblemInfo from '../components/info-class.js';

export const GroupingDishes = new ProblemInfo(
  'Grouping Dishes', // name
  'Easy', // difficulty
  'Nov 21th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/interview-practice/question/xrFgR63cw7Nch4vXo/description', // link
  'Group dishes by ingredients.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Hash', // topics
  `
    create a hash
    loop over each dish
      loop over each ingredient (skip dish name for now)
        if hash doesn't contain ingredient, add to hash using dish name as value in array
        if hash contains ingreient, add dish to value array

    loop over hash
      check if ingredients contain more than one dish,
        if yes, sort the dishes in the hash
                add ingredient in an array to result array
    sort the result array

    loop over each result array
      add hash dishes array to each ingredient
      flatten arrays to be only one level

    return result;

  `, // pseudoCode
  function solution(dishes: string[][]): string[][] {
    const hash: any = {};
    for (let d = 0; d < dishes.length; d++) {
      for (let i = 1; i < dishes[d].length; i++) {
        const ing = dishes[d][i];
        if (hash[ing] === undefined) {
          hash[ing] = [dishes[d][0]];
        } else {
          hash[ing].push(dishes[d][0]);
        }
      }
    }

    const result = [];
    for (const ingredient in hash) {
      if (hash[ingredient].length > 1) {
        hash[ingredient].sort();
        result.push([ingredient]);
      }
    }
    result.sort();

    for (let r = 0; r < result.length; r++) {
      const ingred = result[r][0];
      result[r].push(hash[ingred]);
      result[r] = result[r].flat();
    }

    return result;
  } // solution
);
