function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

console.log(solution(3, 12)); //	[3, 12]
console.log(solution(2, 5)); // [1, 10]
