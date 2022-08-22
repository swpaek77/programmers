function solution(queue1, queue2) {
  const sumAll = num => num.reduce((pre, cur) => pre + cur, 0);
  const total = sumAll(queue1) + sumAll(queue2);

  /**
   * 1. 모두 더한 값이 홀수면 불가능
   */
  if (total % 2 !== 0) return -1;

  const max = Math.max(Math.max(...queue1), Math.max(...queue2));
  const half = total / 2;

  /**
   * 2. max 값이 half 보다 크면 불가능
   */
  if (max > half) return -1;

  const popInsert = (a, b) => b.push(a.shift());

  console.log('**** 초기값 ****');
  console.log('queue1', queue1, sumAll(queue1));
  console.log('queue2', queue2, sumAll(queue2));
  console.log('****************');
  /**
   * 1번
   */
  let count = 0;
  while (sumAll(queue1) !== sumAll(queue2)) {
    if (sumAll(queue1) > sumAll(queue2)) {
      popInsert(queue1, queue2);
    } else {
      popInsert(queue2, queue1);
    }
    count++;
  }
  // popInsert(queue2, queue1);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));

  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));

  // /**
  //  * 2번
  //  */
  // popInsert(queue2, queue1);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));
  // popInsert(queue2, queue1);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));

  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));
  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));
  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));
  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));
  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));

  // popInsert(queue1, queue2);
  // console.log('queue1', queue1, sumAll(queue1));
  // console.log('queue2', queue2, sumAll(queue2));

  // console.log('total', total);
  // console.log('max', max);
  return count;
}

function solution(queue1, queue2) {
  const sumAll = num => num.reduce((pre, cur) => pre + cur, 0);
  const total = sumAll(queue1) + sumAll(queue2);

  /**
   * 1. 모두 더한 값이 홀수면 불가능
   */
  if (total % 2 !== 0) return -1;

  const NEW_ARR = [...queue1, ...queue2];
  const max = NEW_ARR.reduce((pre, cur) => (pre > cur ? pre : cur));
  const half = total / 2;
  /**
   * 2. max 값이 half 보다 크면 불가능
   */
  if (max > half) return -1;

  /**
   * 3. Greedy 알고리즘
   */

  let count = 0;
  let start = 0;
  let end = queue1.length;
  let sum1 = sumAll(queue1);

  while (count <= queue1.length * 3) {
    if (sum1 === half) return count;
    if (sum1 < half) {
      sum1 += NEW_ARR[end++];
    } else if (sum1 > half) {
      sum1 -= NEW_ARR[start++];
    } else {
      break;
    }
    count++;
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); //	2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
console.log(solution([1, 1, 2, 3, 4, 5, 6], [1, 5])); // -1
