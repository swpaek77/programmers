const getFirstIndexOfMaxValue = array => array.reduce((r, v, i, a) => (v >= a[r] ? r : i), -1);
const getMinIdx = array => array.reduce((r, v, i, a) => (v > a[r] ? r : i), -1);

// console.log('getMinIdx[1,4,3,2]', getMinIdx([5, 4, 2, 10, 3, 4]));

// function solution(N, road, K) {
//   const FIRST_NODE = 1;

//   const numArrC = Array(N).fill(false);
//   const numArr = Array(N).fill(Infinity);
//   let newRoad = road.map(res => [Math.min(res[0], res[1]), Math.max(res[0], res[1]), res[2]]).sort((a, b) => a[0] - b[0]);

//   let NODE = 1;
//   while (newRoad.length > 0) {
//     newRoad.forEach(res => {
//       const [start, end, length] = res;
//       if (start === 1) {
//         numArr[end - 1] = length;
//         return;
//       }

//       if (start === NODE) {
//         numArr[end - 1] = Math.min(numArr[end - 1], numArr[NODE - 1] + length);
//         console.log('123', numArr, numArr[end - 1], numArr[NODE - 1] + length);
//       }
//     });
//     newRoad = newRoad.filter(res => res[0] !== NODE);
//     numArrC[NODE - 1] = true;
//     // // NODE = Math.min(...numArr.filter(res => !numArrC.find((_, i) => i + 1 === res)));
//     // // console.log('NODE', NODE, numArrC);
//     const nonArr = numArr.map((res, idx) => (numArrC[idx] ? Infinity : res));
//     NODE = getMinIdx(nonArr) + 1;
//     console.log('numArr', numArr, NODE);
//   }
//   // newRoad.forEach(res => {
//   //   if (res[0] === FIRST_NODE) {
//   //     numArr[res[1] - 1] = res[2];
//   //     return;
//   //   }
//   //   if (res[0] === i) {
//   //     numArr[res[1] - 1] = Math.min(numArr[res[1] - 1], numArr[i - 1] + res[2]);
//   //   }
//   //   console.log('numArr', numArr);
//   // });
//   // // }

//   return numArr.filter(res => res <= K).length + 1;
// }

function solution(N, road, K) {
  const start = 1;
  const graph = Array.from({ length: N + 1 }, () => []);
  const dis = Array.from({ length: N + 1 }, (_, i) => (i === start ? 0 : Infinity));

  for (const [from, to, length] of road) {
    graph[from].push({ to, length });
    graph[to].push({ to: from, length });
  }

  let queue = [{ to: start, length: 0 }];
  while (queue.length) {
    const stack = [...queue];
    queue = [];
    while (stack.length) {
      const { to } = stack.pop();
      for (const next of graph[to]) {
        if (dis[next.to] > dis[to] + next.length) {
          dis[next.to] = dis[to] + next.length;
          queue.push(next);
        }
      }
    }
  }
  dis.shift();

  return dis.filter(res => res <= K).length;
}

// console.log(solution()); //
console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4
// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 1],
//       [1, 3, 2],
//       [2, 3, 2],
//       [3, 4, 3],
//       [3, 5, 2],
//       [3, 5, 3],
//       [5, 6, 1],
//     ],
//     4
//   )
// ); // 4

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 2],
//       [1, 3, 5],
//       [1, 4, 1],
//       [2, 3, 3],
//       [2, 4, 2],
//       [3, 4, 3],
//       [3, 5, 1],
//       [3, 6, 5],
//       [4, 5, 1],
//       [5, 6, 2],
//     ],
//     4
//   )
// ); // 4
