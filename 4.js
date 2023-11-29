function solution(n, k) {
  let count = 0;

  const board = Array(n).fill(false);

  function placeRooks(row, placed, board) {
    if (placed === k) {
      count++;
      return;
    }
    if (row >= n) {
      return;
    }

    // for (let col = 0; col < n; col++) {
    //   if (!board[col]) {
    //     board[col] = true;
    //     placeRooks(row + 1, placed + 1, board);
    //     board[col] = false;
    //   }
    // }

    console.log(row);
    placeRooks(row + 1, placed, board);
  }

  placeRooks(0, 0, board);
  return count % 10007;
}

/**
 *
 */
// console.log(solution(4, 0)); // 1
// console.log(solution(2, 0)); // 1
// // console.log(solution(31, 32)); // 1
// console.log(solution(2, 1)); // 4
// console.log(solution(1, 0)); // 1
// console.log(solution(2, 2)); // 2
// console.log(solution(3, 2)); // 18
// console.log(solution(4, 2)); // 72
// console.log(solution(5, 2)); // 200
// console.log(solution(5, 3)); // 600
// console.log(solution(14, 3)); // 600
console.log(solution(14, 3)); // ?

/**
 * 24번 : n -> 19, k -> 14
 * 25번 : n -> 21, k -> 11
 *
 * 테스트 1 〉 실패 (0.14ms, 32.9MB)  : n -> 31, k ->
 * 테스트 2 〉 실패 (0.19ms, 33MB)    : n -> 31, k ->
 * 테스트 3 〉 실패 (0.14ms, 33.3MB)  : n -> 31, k ->
 * 테스트 4 〉
 * 테스트 5 〉 실패 (0.20ms, 33.3MB)  : n -> 31, k ->
 * 테스트 6 〉 실패 (0.18ms, 33.4MB)  : n -> 31, k ->
 * 테스트 7 〉
 * 테스트 8 〉
 */
