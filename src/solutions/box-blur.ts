import ProblemInfo from '../components/info-class.js';

  export const BoxBlurInfo = new ProblemInfo(
    'Box Blur', // name
    'Easy', // difficulty
    'Aug 29, 2022', // date
    'Code Signal', // source
    'https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP', // link
    'Blur pixels and remove surrounding values', // summary
    true, // completed
    false, // usedHelp
    '', // helpSource
    '', // topics
    `
    note: end image will be number of rows & cols -2, for example if image is 7x7 (49) result will be 5x5 (25)
    1. declare array for result
    2. declare variable y = rows
    3. declare variable x = cols
    4. get y from image (image.length) -2
    5. get x from image (image[0].length) - 2
    6. loop y times, create array for each
        7. for each row values will equal to
            8. slice row i (0,3)
            9. slice row i+1 (0,3)
            10. slice  row i+2 (0, 3)
                11. flat and reduce for total, divide by 9
                12. insert to y row
        13. increment row
    14. return array
    `, // pseudoCode
    function solution(image: number[][]):number[][]  {
      const result: any[] = [];
        const y = (image.length) -2;
        const x = (image[0].length) -2;
        for(let i = 0; i < y; i++) {
            result[i] = [];
            for (let t = 0; t < x; t++) {
              const a = image[i].slice(t, (t+3)).flat().reduce((p: any, c:any) => p + c, 0);
              const b = image[i+1].slice(t, (t+3)).flat().reduce((p: any, c: any) => p + c, 0);
              const c = image[i+2].slice(t, (t+3)).flat().reduce((p:any, c: any) => p + c, 0);
              result[i].push(Math.floor(((a+b+c)/9)))
            }
        }
        return result;
      }
  );
