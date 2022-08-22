function solution(s) {
  return s
    .split(' ')
    .map(res =>
      res
        .split('')
        .map((r, i) => (i % 2 === 0 ? r.toUpperCase() : r.toLowerCase()))
        .join('')
    )
    .join(' ');
}

console.log(solution('try hello world')); //	"TrY HeLlO WoRlD"
