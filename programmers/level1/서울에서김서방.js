function solution(seoul) {
  return `김서방은 ${seoul.findIndex(res => res === 'Kim')}에 있다`;
}

console.log(solution(['Jane', 'Kim'])); //	"김서방은 1에 있다"
