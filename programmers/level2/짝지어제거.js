function solution(s) {
  const stackArr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stackArr[stackArr.length - 1] === s[i]) {
      stackArr.pop();
    } else {
      stackArr.push(s[i]);
    }
  }
  return stackArr.length === 0 ? 1 : 0;
}
console.log(solution('baabaa')); //	1
console.log(solution('cdcd')); //	0
