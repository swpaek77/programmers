function solution(n) {
  return (
    Array
      //
      .from({ length: n }, (_, i) => i + 1)
      .reduce((pre, cur) => (pre += isPrime(cur) ? 1 : 0), 0)
  );
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) return num === 2 ? true : false;

  const sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}
console.log(solution(10)); // 4
console.log(solution(5)); // 3
