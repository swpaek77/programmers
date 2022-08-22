function solution(n) {
  return Array.from({ length: n }, (_, i) => (i % 2 === 0 ? '수' : '박')).join('');
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
