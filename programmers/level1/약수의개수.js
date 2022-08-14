function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += makeMeasure(i);
  }
  return answer;
}

function makeMeasure(num) {
  let count = 1;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count % 2 === 0 ? num : -num;
}

console.log(solution(13, 17)); //	43
console.log(solution(24, 27)); //	52
