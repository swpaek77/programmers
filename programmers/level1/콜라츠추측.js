function solution(num) {
  let count = 0;
  let number = num;
  const colatz = n => (n % 2 === 0 ? n / 2 : n * 3 + 1);
  for (let i = 0; i < 500; i++) {
    number = colatz(number);
    count = i + 1;
    if (number === 1) break;
  }
  return num === 1 ? 0 : count === 500 ? -1 : count;
}

console.log(solution(1)); // 0
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
