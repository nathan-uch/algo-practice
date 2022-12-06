import ProblemInfo from '../components/info-class.js';

export const LastStoneWeight = new ProblemInfo(
  'Last Stone Weight', // name
  'Easy', // difficulty
  'Dec 6st, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/last-stone-weight/description/', // link
  'Get last stone weight after smashing two heaviest until only one remains.', // summary
  true, // completed
  false, // usedHelp
  '', // helpSource
  'Heap / Priority Queue', // topics
  `
    My solution:
    (base case for recursion)
    check if only one stone left or if no stones are left
      return last stone or 0, respectively
    sort stones array and get two heaviest stones
    remove both heaviest from array
    check if smashing together has remainder
      call recursion if remainder is 0
      add new weight to array and call recursion with new stones

    Note: my solution uses sorting instead of heaps -- still learning heaps
  `, // pseudoCode
  function solution(stones: number[]): number[] | number {
    if (stones.length === 1) {
      return stones;
    } else if (stones.length === 0) {
      return 0;
    } else {
      stones.sort((a, b) => b - a);
      let first = stones[0];
      let second = stones[1];
      stones.splice(0, 2);
      if (first - second === 0) {
        return solution(stones);
      } else {
        stones.push(first - second);
        return solution(stones);
      }
    }
  } // solution
);
