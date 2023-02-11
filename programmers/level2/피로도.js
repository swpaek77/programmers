function solution(k, dungeons) {
  var answer = -1;

  // while (dungeons.length) {
  //   let p = k;
  //   const [minP, useP] = dungeons.shift();

  //   if (p >= minP) {
  //     p -= useP;
  //   }
  //   console.log(p);
  // }

  const com = combination(dungeons, dungeons.length);

  for (let i = 0; i < com.length; i++) {
    let energe = k;
    for (let j = 0; j < com[i].length; j++) {
      const [minP, useP] = com[i][j];
      if (energe >= minP) {
        energe -= useP;
      } else {
        energe = -1;
        break;
      }
    }
    if (energe >= 0) {
      answer++;
    }
  }
  // const aa = com.reduce((pre, cur) => {
  //   let energe = k;
  //   const ex = cur.reduce((p, [minP, useP]) => {
  //     if (energe >= minP) {
  //       energe -= useP;
  //     }
  //     return energe > 0 ? 1 : 0;
  //   }, 0);

  //   return pre + ex;
  // }, 0);

  // console.log(aa);

  return answer;
}

function combination(arr, num) {
  let result = [];
  if (num == 1) return arr.map(e => [e]);

  arr.forEach((e, i, array) => {
    let rest = [...array.slice(0, i), ...array.slice(i + 1)];
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map(x => [e, ...x]);
    result.push(...combiArr);
  });

  return result;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
