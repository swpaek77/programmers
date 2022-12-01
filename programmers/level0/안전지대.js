function solution(board) {
  const X_VALUE = 2;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] !== 1) board[i - 1][j - 1] = X_VALUE;
        if (i - 1 >= 0 && j >= 0 && board[i - 1][j] !== 1) board[i - 1][j] = X_VALUE;
        if (i - 1 >= 0 && j + 1 < board[i].length && board[i - 1][j + 1] !== 1) board[i - 1][j + 1] = X_VALUE;

        if (i >= 0 && j - 1 >= 0 && board[i][j - 1] !== 1) board[i][j - 1] = X_VALUE;
        if (i >= 0 && j >= 0 && board[i][j] !== 1) board[i][j] = X_VALUE;
        if (i >= 0 && j + 1 < board[i].length && board[i][j + 1] !== 1) board[i][j + 1] = X_VALUE;

        if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1] !== 1) board[i + 1][j - 1] = X_VALUE;
        if (i + 1 < board.length && j >= 0 && board[i + 1][j] !== 1) board[i + 1][j] = X_VALUE;
        if (i + 1 < board.length && j + 1 < board[i].length && board[i + 1][j + 1] !== 1) board[i + 1][j + 1] = X_VALUE;
      }
    }
  }

  return board.reduce((pre1, cur1) => pre1 + cur1.reduce((pre2, cur2) => (cur2 === 0 ? pre2 + 1 : pre2), 0), 0);
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]); //	16
// solution([
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0],
//   [0, 0, 0, 0, 0],
// ]); //	13
// solution([
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
// ]); //	0
