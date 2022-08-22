function solution(arr) {
  const min = [...arr].sort((a, b) => a - b)[0];
  return arr.length === 1 ? [-1] : arr.filter(r => r !== min);
}

console.log(solution([4, 3, 2, 1])); //	[4,3,2]
console.log(solution([10])); //	[-1]
