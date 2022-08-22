function solution(s) {
  return /^[0-9]{4,6}$/g.test(s);
}

console.log(solution('a234')); //	false
console.log(solution('1234')); //	true
