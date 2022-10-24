import ProblemInfo from '../components/info-class.js';
export const NumberOfIslands = new ProblemInfo('Number of Islands', 'Medium', 'Oct 20th, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/number-of-islands/', 'Given a grid of 0s and 1s (1s being land), count the number of islands.', true, false, '', 'Graphs', `
  1. create hashmap
  2. Loop through rows,
  3.    loop through columns,
  4.      if char is 1
  5.          check if indexes are included in hashmap
  6.            if no, increase island count
  7.          check four sides for 1 (careful with undefined)
  8.            if side has 1,
  9.                add indexes to hashmap
  10. at end of both loops, return island count
    `, function solution(grid) {
    let islands = 0;
    let hash = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (Number(grid[r][c]) === 1) {
                let curIndex = r + '' + c;
                if (hash.includes(curIndex)) {
                    let oneIndex = hash.indexOf(curIndex);
                }
                else {
                    islands++;
                }
                if (grid[r][c + 1] !== undefined && Number(grid[r][c + 1]) === 1) {
                    let right = r + '' + Number(c + 1);
                    hash.push(right);
                }
                if (grid[r + 1] !== undefined && Number(grid[r + 1][c]) === 1) {
                    let bot = Number(r + 1) + '' + c;
                    hash.push(bot);
                }
                if (grid[r][c - 1] !== undefined && Number(grid[r][c - 1]) === 1) {
                    let left = r + '' + Number(c - 1);
                    hash.push(left);
                }
            }
        }
    }
    if (hash.length !== 0) {
    }
    return islands;
}, function solution2(grid) {
    if (!grid) {
        return 0;
    }
    let visited;
    let islands = 0;
});
