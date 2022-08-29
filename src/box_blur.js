import ProblemInfo from './info_template.js';

export const BoxBlurInfo = new ProblemInfo;
BoxBlurInfo.name = 'Box Blur';
BoxBlurInfo.website = 'Code Signal';
BoxBlurInfo.link = 'https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP';
BoxBlurInfo.date = 'Aug 29, 2022';
BoxBlurInfo.difficulty = 'Easy';
BoxBlurInfo.recommendedTime = 25;
BoxBlurInfo.timeToComplete = 40;
BoxBlurInfo.complete = true;
BoxBlurInfo.problem = 'Blur pixels and remove surrounding values';

/* Problem & Example:
Algo should distort the image in the following way:
Every pixel should be have a value that equals to the average of the pixel values surrounding it in a 3x3 square.
The pixel output should include the center value as the average with all surrounding pixels removed.

Image:
[[1, 1, 1],
 [1, 7, 1],
 [1, 1, 1]]
Equals:
[[1]]

Steps:
Get pixel total: 1+1+1+1+7+1+1+1+1 = 15
Get pixel average: 15/9 = 1.666 = 1
Remove surrounding pixels = [[1]]

-------------------------- Pseudo Code ------------------------

For 3x3 --
flat whole array, (might be easier and simpler for getting average, might use this for larger images too)
reduce adding each value (loop through remaining array adding each value)
divide by 9 and round down and insert result into an array
return result

for larger than 1 pixel --
note: end image will be number of rows & cols -2, for example if image is 7x7 (49) result will be 5x5 (25)

y = rows
x = cols

create result empty array
get y from image (image.length) -2
get x from image (image[0].length) - 2
loop y times, create array for each
    for each row values will equal to 
        -slice row i (0,3)
        -slice row i+1 (0,3)
        -slice  row i+2 (0, 3)
            -flat and reduce for total, divide by 9
            -insert to y row
    increment row
return array

*/

function solution(image) {
    const result = [];
    const y = (image.length) -2;
    const x = (image[0].length) -2;
    for(let i = 0; i < y; i++) {
        result[i] = [];
        for (let t = 0; t < x; t++) {
            const a = image[i].slice(t, (t+3)).flat().reduce((p, c)=> p + c, 0);
            const b = image[i+1].slice(t, (t+3)).flat().reduce((p, c)=> p + c, 0);
            const c = image[i+2].slice(t, (t+3)).flat().reduce((p, c)=> p + c, 0);
            result[i].push(Math.floor(((a+b+c)/9)))
        }
    }
    return result;
}
