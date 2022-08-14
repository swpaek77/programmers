function solution(a, b) {
  return (
    Array
      //
      .from({ length: Math.max(a, b) - Math.min(a, b) + 1 }, (_, i) => Math.min(a, b) + i)
      .reduce((pre, cur) => pre + cur, 0)
  );
}

console.log(solution(3, 5)); //	12
console.log(solution(3, 3)); //	3
console.log(solution(5, 3)); //	12
