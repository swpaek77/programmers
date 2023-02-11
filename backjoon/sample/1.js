const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let num = +input;
let sum = 0;
for (let i = 1; i <= num; ++i) {
  sum += i * Math.floor(num / i);
}

console.log(sum);
