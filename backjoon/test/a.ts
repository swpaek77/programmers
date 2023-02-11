import { readFileSync } from 'fs';

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = readFileSync(filePath).toString().trim();

const splitValue = input.split(process.platform === 'linux' ? '\n' : '\r\n');
const [length, stones] = [Number(splitValue[0]), splitValue[1].split(' ').map(res => Number(res))];

let isSequence = true;
let count = [0, 0];
for (let i = 0; i < length - 1; i++) {
  if (stones[i] === stones[i + 1]) {
    count[stones[i] - 1] += isSequence ? 2 : 1;
    isSequence = false;
  } else {
    isSequence = true;
  }
}
console.log(Math.max(...count) || 1);

/**
 * 21
 * 1 1 1 1 2 2 2 2 1 2 1 2 2 1 1 2 1 2 2 1 2
 * 4 2
 * 4 2 2
 */

/**
 * 22
 * 1 1 1 1 2 2 2 2 1 2 1 2 2 1 1 2 1 2 2 1 2 2
 * 4 2
 * 4 2 2 2
 */

/**
 * 44
 * 1 1 1 1 1 1 1 2 2 2 1 2 1 2 1 2 2 2 1 1 2 2 2 1 1 2 1 2 1 2 1 2 1 1 1 2 2 2 2 1 1 2 2 1
 * 7 2 2 3 2
 * 3 3 3 4 2
 */
