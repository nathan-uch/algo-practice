import ProblemInfo from '../components/info-class.js';
export const DigitsProduct = new ProblemInfo('Digits Product', 'Medium', 'Nov 3rd, 2022', 'Code Signal', 'https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA', 'From integer, find smallest positive integer from product of digits.', true, false, '', '', `
  check if product is 0, if yes, return 10
  create variable for current and result string
    loop from 9 down to 2
      check if current is 1
        if yes, replace result string with current
        if not, check if current modulous i is 0
          if yes, replace current with current divided by if
                  add i to beginning of result
                  reset i to 10
        if not, check if current is greater than 0 and less than 10
          if yes, add current to beginning of result
          end loop
        check if i is 3 and current is greater than 1 (remainders)
          if yes, make res equal to 0

    at end of loop, get the result and convert to number
    check if result is 0,
      if yes, return -1
      if not, return the result
    `, function solution(product) {
    if (product === 0)
        return 10;
    let cur = product;
    let res = '';
    for (let i = 9; i > 2; i--) {
        if (cur === 1) {
            res = cur.toString();
        }
        else if (cur % i === 0) {
            cur = cur / i;
            res = i + res;
            i = 10;
        }
        else if (cur > 0 && cur < 10) {
            res = cur + res;
            break;
        }
        if (i === 3 && cur > 1)
            res = '0';
    }
    const result = Number(res);
    if (result === 0)
        return -1;
    return result;
});
//# sourceMappingURL=digits-product.js.map