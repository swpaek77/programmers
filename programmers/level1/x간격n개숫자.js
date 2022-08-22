function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(solution(2, 5)); //[2,4,6,8,10]
console.log(solution(4, 3)); //[4,8,12]
console.log(solution(-4, 2)); //	[-4, -8]
