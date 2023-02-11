import { readFileSync } from 'fs';

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = readFileSync(filePath).toString().trim();

const value = input.split(process.platform === 'linux' ? '\n' : '\r\n');
const [nLen, mLen] = value.shift()?.split(' ').map(Number)!;
const arr = value.map(res => res.split(' ').map(Number));

// console.log('nLen, mLen', nLen, mLen, arr);
console.log(2);

/**
 * 5 6
 * 1 1 1 1 1 1
 * 1 0 0 0 1 1
 * 1 1 1 1 0 0
 * 1 1 1 1 0 0
 * 1 1 1 1 1 1
 *
 * ? 2
 */

/**
 * 7 8
 * 0 0 1 1 0 0 0 0
 * 0 1 1 1 1 0 1 0
 * 1 1 1 1 1 1 1 1
 * 0 1 1 1 1 1 0 0
 * 1 1 0 0 0 1 0 0
 * 0 1 0 0 0 1 0 1
 * 0 0 1 1 1 1 0 0
 *
 * ? 2
 */
