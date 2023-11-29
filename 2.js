function solution(dirs) {
  const current = [0, 0];
  const result = [];

  const move = {
    L: [0, -1],
    R: [0, 1],
    U: [1, 0],
    D: [-1, 0],
  };

  [...dirs].forEach(res => {
    const prev = current.join();
    if (!(current[0] + move[res][0] > 5 || current[0] + move[res][0] < -5 || current[1] + move[res][1] > 5 || current[1] + move[res][1] < -5)) {
      current[0] = current[0] + move[res][0];
      current[1] = current[1] + move[res][1];
    }
    result.push([current.join(), prev]);
  });

  return result.reduce((pre, cur) => {
    if (!(cur[0] === cur[1]) && !pre.find(res => res[0] === cur[0] && res[1] === cur[1]) && !pre.find(res => res[1] === cur[0] && res[0] === cur[1])) {
      pre.push(cur);
    }
    return pre;
  }, []).length;
}

solution('ULURRDLLU');
solution('LULLLLLLU');
