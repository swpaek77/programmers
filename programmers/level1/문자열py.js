function solution(s) {
  const arr = s.toUpperCase().split('');
  const p = arr.filter(res => res === 'P').length;
  const y = arr.filter(res => res === 'Y').length;

  return p === y ? true : false;
}

console.log(solution('pPoooyY')); //	true
console.log(solution('Pyy')); //	false
