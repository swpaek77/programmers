// function solution(maps) {
//   const width = maps[0].length;
//   const height = maps.length;

//   const graph = maps.reduce((pre, cur, idx) => {
//     for (let i = 0; i < cur.length; i++) {
//       if (maps[idx][i] === 0) continue;

//       const node = [];
//       const number = idx * width + i;

//       /**
//        * 위: idx !== 0 && idx - 1
//        * 아래: idx !== height - 1 && idx + 1
//        * 왼쪽: i !== 0 && i - 1
//        * 오른쪽: i !== width - 1 && i + 1
//        */

//       idx !== 0 && maps[idx - 1][i] === 1 && node.push(width * (idx - 1) + i);
//       idx !== height - 1 && maps[idx + 1][i] === 1 && node.push(width * (idx + 1) + i);
//       i !== 0 && maps[idx][i - 1] === 1 && node.push(width * idx + i - 1);
//       i !== width - 1 && maps[idx][i + 1] === 1 && node.push(width * idx + i + 1);

//       pre[number] = node.map(res => res.toString());
//     }
//     return pre;
//   }, {});

//   const BFS = async (graph, startNode) => {
//     const visited = [];
//     let needVisit = [];

//     needVisit.push(startNode);
//     while (needVisit.length !== 0) {
//       const node = needVisit.shift();
//       if (!visited.includes(node)) {
//         visited.push(node);
//         // needVisit = [...new Set([...needVisit, ...graph[node]])];
//         // needVisit = [...needVisit, ...graph[node]].filter(res => !visited.includes(res));
//         // console.log(needVisit);
//         // console.log(needVisit);
//         needVisit = [...needVisit, ...graph[node]];
//         console.log(needVisit);
//         await sleep(200);

//         if (node === (width * height - 1).toString()) {
//           return visited;
//         }
//       }
//     }
//     return -1;
//   };

//   BFS(graph, '0');
//   // console.log(count, countObj, graph);
// }

function solution(maps) {
  const rowIdx = maps[0].length - 1;
  const colIdx = maps.length - 1;

  /**
   * 상: [0, -1]
   * 하: [0, 1]
   * 좌: [-1, 0]
   * 우: [1, 0]
   */
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  /**
   * BFS 시작
   * 시작점 [0, 0] + 경로 [1]
   */
  const queue = [[0, 0, 1]];
  maps[0][0] = 0;
  while (queue.length) {
    const [y, x, count] = queue.shift();
    if (x === rowIdx && y === colIdx) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx > rowIdx || ny > colIdx) continue;
      if (maps[ny][nx] !== 1) continue;

      maps[ny][nx] = 0;
      queue.push([ny, nx, count + 1]);
    }
  }

  return -1;
}

// function solution(maps) {
//   const xLength = maps.length;
//   const yLength = maps[0].length;
//   const dx = [0, 0, -1, 1];
//   const dy = [-1, 1, 0, 0];

//   const bfs = async () => {
//     const queue = [[0, 0, 1]];
//     while (queue.length) {
//       const [x, y, count] = queue.shift();
//       console.log([x, y, count, x * xLength + y], queue);
//       if (x === xLength - 1 && y === yLength - 1) {
//         return count;
//       }
//       if (maps[x][y]) {
//         maps[x][y] = 0;
//         dx.forEach((dx, i) => {
//           const nx = x + dx;
//           const ny = y + dy[i];
//           if (nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && maps[nx][ny]) {
//             queue.push([nx, ny, count + 1]);
//           }
//         });
//       }
//     }
//     return -1;
//   };
//   // bfs();
//   // return bfs();
//   console.log(bfs());
// }

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

solution([
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 1],
]); // 	11

// solution([
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ]); // 	-1
