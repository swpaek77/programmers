const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n')
  .map(res => res.split(' ').map(res => Number(res)));
// .split(' ')
// .map(res => Number(res));

console.log(input);
