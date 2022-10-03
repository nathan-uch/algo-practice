import ProblemInfo from '../info-template.js';

export const ElectionsWinnders = new ProblemInfo;
ElectionsWinnders.name = 'Elections Winners';
ElectionsWinnders.website = 'Code Signal';
ElectionsWinnders.link = 'https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg';
ElectionsWinnders.date = 'Oct 2st, 2022';
ElectionsWinnders.difficulty = 'Medium';
ElectionsWinnders.recommendedTime = 15;
ElectionsWinnders.timeToComplete = 30;
ElectionsWinnders.complete = true;
ElectionsWinnders.problem = 'Given current votes and remaining votes, find out who can win.';
ElectionsWinnders.topics = '';
ElectionsWinnders.usedHelp = false;
ElectionsWinnders.pseudoCode = `
Steps:
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
`;

/* Problem & Example:
Elections are in progress!
Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
The winner of the election must secure strictly more votes than any other candidate.
If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

For votes = [2, 3, 5, 2] and k = 3, the output should be solution(votes, k) = 2.

The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.
The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
The last candidate can't win no matter what (for the same reason as the first candidate).
Thus, only 2 candidates can win (the second and the third), which is the answer.
*/

function solution(votes, k) {
  let res = 0;
  let max = votes.map(v => v + k);
  let hi = Math.max(...votes);
  let repeats = 0;
  for (let i = 0; i < max.length; i++) {
    console.log('max[i] & hi:', max[i], hi);
    console.log(repeats)
    if (max[i] > hi) {
      res++;
    } else if (max[i] === hi) {
      repeats++;
    }
  }
  if (repeats === 1 && k === 0) return repeats;
  return res;
}

console.log(solution([1, 2, 3, 4, 5], 4), 'ans: 4');
