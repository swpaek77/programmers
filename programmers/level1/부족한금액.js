function solution(price, money, count) {
  const lessMoney = Array
    //
    .from({ length: count }, (_, i) => i + 1)
    .reduce((pre, cur) => pre - price * cur, money);
  return lessMoney >= 0 ? 0 : -lessMoney;
}

console.log(solution(3, 20, 4)); //10

// 3
// 6
// 9
// 12
