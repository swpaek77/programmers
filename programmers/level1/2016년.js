const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
const monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution(a, b) {
  let count = b;
  monthDate.some((res, idx) => {
    if (idx + 1 === a) return true;
    count += res;
  });
  return date[count % 7];
}

console.log(solution(5, 24));
