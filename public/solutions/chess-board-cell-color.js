import ProblemInfo from '../components/info-class.js';
export const ChessBoardCellColor = new ProblemInfo('Chess Board Cell Color', 'Easy', 'Sep 2, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi', 'Check if two cell colors on chess board are the same', true, false, '', '', `
    1. create array with letters a to h
    2. get index of letter + 1
    3. check if the sum of both indexes are even or odd,
        4. if even it's dark
        5. if odd it's light

    5. check if both are equal
    6. return true if yes
    7. return false if not
    `, function solution(c1, c2) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const one = [alpha.indexOf(c1[0]) + 1, c1[1]];
    const two = [alpha.indexOf(c2[0]) + 1, c2[1]];
    let result1 = null;
    let result2 = null;
    if ((parseInt(one[0].toString()) + parseInt(one[1].toString())) % 2 === 0) {
        result1 = 'dark';
    }
    else {
        result1 = 'light';
    }
    if ((parseInt(two[0].toString()) + parseInt(two[1].toString())) % 2 === 0) {
        result2 = 'dark';
    }
    else {
        result2 = 'light';
    }
    if (result1 === result2)
        return true;
    return false;
});
//# sourceMappingURL=chess-board-cell-color.js.map