function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b).some(res => {
    budget -= res;
    if (budget >= 0) {
      count++;
    } else {
      return true;
    }
  });

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4
console.log(solution([2, 5], 9)); //2

// 2 5 -> 9
