const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [cK, cQ, cL, cB, cN, cP] = [1, 1, 2, 2, 2, 8];
const [k, q, l, b, n, p] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(res => +res);

console.log(cK - k, cQ - q, cL - l, cB - b, cN - n, cP - p);
