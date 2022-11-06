import ProblemInfo from '../components/info-class.js';

export const FileNaming = new ProblemInfo(
  'File Naming', // name
  'Medium', // difficulty
  'Nov 5th, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC', // link
  'From array of document file names, adding number in parenthesis to repeated ones.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Hashmap', // topics
  `
  create a hash map object
  create variable to hold result
  loop through array
    take current

    case 1: not in hash, not in result
      - add to hash
      - add to result

    case 2: not in hash
      - start a count
      - add (count) to current
      - while the result includes cur
        - increment count
        - redo cur with count
      - add cur to hash
      - add cur to result

  return result array
    `, // pseudoCode
  function solution(names: string[]): string[] {
    let hash: any = {};
    let result: string[] = [];
    for (let i = 0; i < names.length; i++) {
      let org = names[i];
      if (!result.includes(org) && hash[org] === undefined) {
        hash[org] = 1;
        result.push(org);
      } else if (hash[org] !== undefined) {
        let count = 1;
        let cur = names[i] + '(' + count + ')';
        while (result.includes(cur)) {
          cur = names[i] + '(' + count + ')';
          count++;
        }
        hash[cur] = 0;
        result.push(cur);
      }
    }
    return result;
  } // solution
);
