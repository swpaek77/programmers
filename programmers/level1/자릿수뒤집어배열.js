function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(res => Number(res));
}

console.log(solution(12345)); // [5,4,3,2,1]
