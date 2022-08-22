function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .map(res => Number(res))
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(solution(118372)); // 873211
