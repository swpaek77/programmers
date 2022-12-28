const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');
const [a, b] = input;

console.log(+a + +b);
