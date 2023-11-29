function solution(begin, target, words) {
  const wordObj = {};
  words.forEach(str => {
    for (let i = 0; i < str.length; i++) {
      const w = [...str].map((r, idx) => (i === idx ? '_' : r)).join('');
      if (!wordObj[w]) wordObj[w] = new Set();
      wordObj[w].add(str);
    }
  });

  const visited = {};
  let min = null;
  const getBfs = (str, cnt) => {
    for (let i = 0; i < str.length; i++) {
      const w = [...str].map((r, idx) => (i === idx ? '_' : r)).join('');
      if (visited[w] === undefined || visited[w] > cnt) {
        visited[w] = cnt;
        if (wordObj[w]?.has(target)) {
          min = min === null ? cnt : Math.min(min, cnt);
        }
        wordObj[w]?.forEach(res => {
          getBfs(res, cnt + 1);
        });
      }
    }
  };

  getBfs(begin, 0);
  return min !== null ? min + 1 : 0;
}

// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
// console.log(solution('hit', 'cog', ['hot', 'hat', 'cog'])); // 0
console.log(solution('hot', 'lot', ['hot', 'dot', 'dog', 'lot', 'log'])); // 2
