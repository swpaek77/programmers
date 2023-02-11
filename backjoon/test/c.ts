import { readFileSync } from 'fs';

const linebreak = process.platform === 'linux' ? '\n' : '\r\n';
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = readFileSync(filePath).toString().trim();

/**
 * @Description Data Parsing
 */
const value = input.split(linebreak).reverse();
const [N, M, C] = value.pop()!.split(' ').map(Number);
const W = Array.from({ length: C }, () => value.pop()?.split(' ').map(Number)!);
const nCharacter = value.pop()?.split(' ').map(Number)!;
const mCharacter = value.pop()?.split(' ').map(Number)!;
// console.log([N, M, C], W, nCharacter, mCharacter);

/**
 * @Description A 대학 -> B 대학 악수
 */
let result: number[] = [];
for (let i = 0; i < nCharacter.length; i++) {
  let handshake: number[] = [];
  for (let j = 0; j < mCharacter.length; j++) {
    handshake.push(W[nCharacter[i] - 1][mCharacter[j] - 1]);
  }

  result.push(handshake.sort((a, b) => b - a).reduce((pre, cur, idx) => pre + (idx >= nCharacter.length ? 0 : cur)));
}

/**
 * @Description B 대학 -> A 대학 악수
 */
for (let i = 0; i < mCharacter.length; i++) {
  let handshake: number[] = [];
  for (let j = 0; j < nCharacter.length; j++) {
    handshake.push(W[mCharacter[i] - 1][nCharacter[j] - 1]);
  }
  result.push(handshake.sort((a, b) => b - a).reduce((pre, cur, idx) => pre + (idx >= mCharacter.length ? 0 : cur)));
}
console.log('result', result);
console.log(Math.max(...result));

/**
 * 3 4 3
 *
 * 1 10 7
 * 10 10 4
 * 4 5 2
 *
 * 1 2 3
 * 1 3 2 1
 *
 * 1 7 10 1 => 18
 * 10 4 10 10 => 30
 * 4 2 5 4 => 13
 *
 * 1 10 7
 * 4 5 2
 * 10 10 4
 * 1 10 7
 */
