import ProblemInfo from '../components/info-class.js';
export const SpiralNumbers = new ProblemInfo('Spiral Numbers', 'Medium', 'Nov 8th, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx', 'Create matrix of n x n with spiral number order.', true, false, '', '', `
  create matrix using n for rows & cols
  pre fill matrix with 0s to later check where numbers can be put (undefined will be borders)

  create count variable
  while count < (n x n)
    create variable to hold direction (left, down, right, up) starting at right
    create variable for current position [0, 0] [row, col]
    add current count to matrix using position

    if RIGHT:
      if next position in matrix is undefined or 0
        - change direction to down
        - increment row in position
      if not
        - increment column in position

    if DOWN:
      if next position down in matrix is undefined or 0
        - change position to left
        - decrement col in position
        if not
        - increment row position

    if LEFT:
      if next left position in matrix is undefined or 0
        - change direction to up
        - decrement row in position
      if not
        - decrement column in position

    if UP:
      if next up position in matrix is undefined or 0
        - change direction to right
        - increment col in position
      if not
        - decrement row in position

    increment count

  `, function solution(number) {
    const createMatrix = (num) => {
        const m = [];
        for (let x = 0; x < num; x++) {
            let row = [];
            for (let y = 0; y < num; y++) {
                row.push(0);
            }
            m.push(row);
        }
        return m;
    };
    const fillNumbers = (n, m) => {
        let count = 1;
        let dir = 'right';
        let r = 0;
        let c = 0;
        while (count <= n * n) {
            m[r][c] = count;
            if (dir === 'right') {
                if (m[r][c + 1] === undefined || m[r][c + 1] !== 0) {
                    r++;
                    dir = 'down';
                }
                else {
                    c++;
                }
            }
            else if (dir === 'down') {
                if ((m[r + 1] === undefined || m[r + 1][c]) !== 0) {
                    c--;
                    dir = 'left';
                }
                else {
                    r++;
                }
            }
            else if (dir === 'left') {
                if ((m[r][c - 1] === undefined || m[r][c - 1]) !== 0) {
                    r--;
                    dir = 'up';
                }
                else {
                    c--;
                }
            }
            else if (dir === 'up') {
                if (m[r - 1] === undefined || m[r - 1][c] !== 0) {
                    c++;
                    dir = 'right';
                }
                else {
                    r--;
                }
            }
            count++;
        }
        return m;
    };
    return fillNumbers(number, createMatrix(number));
});
