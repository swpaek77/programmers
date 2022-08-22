function solution(w, h) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const [minWidth, minHeight] = [w / gcd(w, h), h / gcd(w, h)];
  const something = (width, height) => width + height - gcd(width, height);
  return w * h - (w / minWidth) * something(minWidth, minHeight);
}

console.log(solution(8, 12)); // 80

// 2 1 -> 2
// 2 2 -> 2
// 2 3 -> 4
// 2 4 -> 4
// 2 5 -> 6
// 2 6 -> 6

// 3 4 3 4 6 7
