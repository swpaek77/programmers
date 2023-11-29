function solution(msg) {
  const obj = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].reduce((pre, cur, idx) => ((pre[cur] = idx + 1), pre), {});
  const answer = [];
  const msgArr = [...msg];

  let str = '';
  while (msgArr.length) {
    str += msgArr.shift();
    if (!obj[str]) {
      obj[str] = Object.keys(obj).length + 1;
      answer.push(obj[str.slice(0, -1)]);
      msgArr.unshift(str.slice(-1));
      str = '';
    }
  }
  answer.push(obj[str]);

  return answer;
}

solution('TOBEORNOTTOBEORTOBEORNOT');
