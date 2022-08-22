function solution(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
