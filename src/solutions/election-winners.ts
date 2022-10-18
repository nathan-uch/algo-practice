import ProblemInfo from '../components/info-class.js';

export const ElectionsWinnders = new ProblemInfo(
  'Election Winners', // name
  'Medium', // difficulty
  'Oct 2nd, 2022', // date
  'Code Signal', // source
  'https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg', // link
  'Given current votes and remaining votes, find out who can win.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  '', // topics
  `
  create copy array
  loop over array
    replace current value with value + k
    check if current value is larger than all others
      if yes, add to result
    check if current val is equal to largest
      if yes, add to repeats
  when loop ends,
  check if repeats is 1 and k is 0, if yes return repeats (1)
  else return result
    `, // pseudoCode
  function solution(votes: number[], k: number): number {
    let res = 0;
    let max = votes.map((v) => v + k);
    let hi = Math.max(...votes);
    let repeats = 0;
    for (let i = 0; i < max.length; i++) {
      if (max[i] > hi) {
        res++;
      } else if (max[i] === hi) {
        repeats++;
      }
    }
    if (repeats === 1 && k === 0) return repeats;
    return res;
  } // solution
);
