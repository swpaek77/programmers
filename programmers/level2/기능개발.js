function solution(progresses, speeds) {
  let sum = [];
  let answer = [];

  const loopHundres = (num1, num2, count) => (num1 + num2 >= 100 ? count : loopHundres(num1 + num2, num2, ++count));

  for (let i = 0; i < progresses.length; i++) {
    sum.push(loopHundres(progresses[i], speeds[i], 1));
  }

  console.log('sum', sum);

  let max = sum[0];
  let count = 1;
  for (let i = 0; i < progresses.length; i++) {
    if (i === 0) continue;
    if (sum[i] > max) {
      answer.push(count);
      count = 0;
      max = sum[i];
    }
    count++;
  }
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
console.log(solution([99, 99, 99], [1, 1, 1])); // [3]
// [7, 3, 9] => [2,1]
// [5, 10, 1, 1, 20, 1] => [1,3,2]
// [5, 6, 1, 4, 7, 6] => [1,3,2]
