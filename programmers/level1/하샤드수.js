function solution(x) {
  // prettier-ignore
  return x % x.toString().split('').reduce((pre, cur) => pre + Number(cur), 0) === 0;
}

console.log(solution(10)); //	true
console.log(solution(12)); //	true
console.log(solution(11)); //	false
console.log(solution(13)); //	false
