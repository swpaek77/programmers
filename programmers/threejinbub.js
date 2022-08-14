function solution(n) {
  return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
