const getTwoWordArr = str => {
  if (str.length <= 1) return [str];

  let arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== ' ' && str[i + 1] !== ' ') {
      arr.push(str[i] + str[i + 1]);
    }
  }

  return arr.sort();
};

function solution(str1, str2) {
  const min = [];
  const max = [];
  const s1 = getTwoWordArr(str1.toUpperCase().replace(/[^A-Z]/g, ' '));
  const s2 = getTwoWordArr(str2.toUpperCase().replace(/[^A-Z]/g, ' '));

  while (s1.length !== 0 || s2.length !== 0) {
    if (s1[0] === s2[0]) {
      min.push(s1[0]);
      max.push(s1[0]);
      s1.shift();
      s2.shift();
      continue;
    }

    if (s2[0] === undefined || s1[0] < s2[0]) {
      max.push(s1.shift());
      continue;
    }

    if (s1[0] === undefined || s1[0] > s2[0]) {
      max.push(s2.shift());
      continue;
    }
  }

  if (max.length === 0) return 65536;
  return Math.floor((min.length / max.length) * 65536);
}

console.log(solution('FRANCE', 'french')); // 16384
console.log(solution('handshake', 'shake hands')); // 65536
console.log(solution('aa1+aa2', 'AAAA12')); // 43690
console.log(solution('E=M*C^2', 'e=m*c^2')); // 65536
