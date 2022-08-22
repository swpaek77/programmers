function solution(numbers, target) {
  let count = 0;

  const numLen = numbers.length;
  const signLen = Math.pow(2, numLen);

  for (let i = 0; i < signLen; i++) {
    const sign = i.toString(2);
    const sum = Array.from({ length: numLen - sign.length }, () => '0')
      .concat(sign.split(''))
      .reduce((pre, cur, idx) => (pre += cur === '1' ? numbers[idx] : -numbers[idx]), 0);

    if (sum === target) count++;
  }

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 	2
