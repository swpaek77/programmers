function solution(phone_number) {
  return phone_number
    .split('')
    .map((res, idx) => (idx > phone_number.length - 5 ? res : '*'))
    .join('');
}

console.log(solution('01033334444')); //	"*******4444"
console.log(solution('027778888')); //	"*****8888"
