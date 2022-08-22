function solution(s) {
  let arr = [];
  const isNotClose = s.split('').some(res => {
    if (res === '(') arr.push(res);
    if (res === ')') {
      if (arr.length === 0) return true;
      else arr.pop();
    }
  });

  return isNotClose || arr.length > 0 ? false : true;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // 	true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // 	false
