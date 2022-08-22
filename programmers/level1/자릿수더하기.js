function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((pre, cur) => pre + Number(cur), 0);
}

console.log(solution(123)); //	6
console.log(solution(987)); //	24
