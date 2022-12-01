function solution(n, left, right) {
  let answer = [];
  let count = 1;
  while (count <= n) {
    let offset = 0;
    for (let i = 1; i < count * 2; i++) {
      if (answer[offset]?.length === count) {
        offset++;
      }
      if (answer[offset]) {
        answer[offset].push(count);
      } else {
        answer[offset] = [count];
      }
    }
    count++;
  }
  return answer.flat().slice(left, right + 1);
}

function solution(n, left, right) {
  let answer = [];
  let count = left;
  let start = (left % n) + 1;

  for (let i = Math.floor(left / n) + 1; i <= n; i++) {
    for (let j = start; j <= n; j++) {
      count++;
      if (count > left && count <= right + 1) {
        answer.push(j > i ? j : i);
      }

      if (count > right + 1) {
        return answer;
      }
    }
    start = 1;
  }

  return answer;
}

// console.log(solution()); //
// console.log(solution(2, 2, 5)); // [3,2,2,3]
console.log(solution(3, 2, 5)); // [3,2,2,3]
/**
 * 1 2 3
 * 2 2 3
 * 3 3 3
 * -----
 * 1 2 3 2 2 3 3 3 3
 */
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
/**
 * 1 2 3 4
 * 2 2 3 4
 * 3 3 3 4
 * 4 4 4 4
 * -------
 * 1 2 3 4 2 2 3 4 3 3 3 4 4 4 4 4
 */
