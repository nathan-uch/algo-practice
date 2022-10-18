import ProblemInfo from '../components/info-class.js';
export const ElectionsWinnders = new ProblemInfo('Election Winners', 'Medium', 'Oct 2nd, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg', 'Given current votes and remaining votes, find out who can win.', true, false, '', '', `
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
    `, function solution(votes, k) {
    let res = 0;
    let max = votes.map((v) => v + k);
    let hi = Math.max(...votes);
    let repeats = 0;
    for (let i = 0; i < max.length; i++) {
        if (max[i] > hi) {
            res++;
        }
        else if (max[i] === hi) {
            repeats++;
        }
    }
    if (repeats === 1 && k === 0)
        return repeats;
    return res;
});
