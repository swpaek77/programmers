const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ');

/**
 * @Description 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 */
console.log(+a + +b);
console.log(+a - +b);
console.log(+a * +b);
console.log(parseInt(+a / +b));
console.log(+a % +b);
