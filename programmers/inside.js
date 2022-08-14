function solution(a, b) {
  return a.reduce((pre, cur, idx) => pre + a[idx] * b[idx], 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
