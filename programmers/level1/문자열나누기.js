// function solution(s) {
//   let answer = [];

//   while (s.length > 1) {
//     let [x, y] = [0, 0];

//     for (let i = 0; i < s.length; i++) {
//       s[i] === s[0] ? x++ : y++;
//       if (x === y) {
//         answer.push(s.substr(0, i + 1));
//         s = s.substr(i + 1);
//         break;
//       }
//     }
//   }

//   if (s.length === 1) answer.push(s);
//   return answer.length;
// }

/**
 *  테스트 1 〉	통과 (0.06ms, 33.4MB)
    테스트 2 〉	통과 (1.03ms, 34MB)
    테스트 3 〉	통과 (4.74ms, 37.3MB)
    ! 테스트 4 〉	실패 (시간 초과)
    테스트 5 〉	통과 (0.08ms, 33.5MB)
    테스트 6 〉	통과 (0.06ms, 33.5MB)
    테스트 7 〉	실패 (시간 초과)
    테스트 8 〉	통과 (0.06ms, 32MB)
    테스트 9 〉	통과 (0.80ms, 32.3MB)
    테스트 10 〉	통과 (6.93ms, 37.3MB)
    테스트 11 〉	통과 (0.52ms, 33.7MB)
    테스트 12 〉	통과 (4.53ms, 37.3MB)
    테스트 13 〉	통과 (4.66ms, 37.3MB)
    테스트 14 〉	통과 (4.46ms, 37.3MB)
    테스트 15 〉	통과 (0.50ms, 33.8MB)
    테스트 16 〉	통과 (5.51ms, 37.3MB)
    테스트 17 〉	통과 (1.01ms, 33.8MB)
    테스트 18 〉	통과 (7.05ms, 37.4MB)
    테스트 19 〉	통과 (4.89ms, 37.1MB)
    테스트 20 〉	통과 (5.24ms, 37.3MB)
    테스트 21 〉	통과 (5.74ms, 37.3MB)
    테스트 22 〉	통과 (4.99ms, 37.2MB)
    테스트 23 〉	통과 (0.90ms, 33.7MB)
    테스트 24 〉	통과 (0.85ms, 33.8MB)
    테스트 25 〉	통과 (4.95ms, 37.4MB)
    테스트 26 〉	통과 (4.47ms, 37.3MB)
    테스트 27 〉	통과 (4.76ms, 37.3MB)
    테스트 28 〉	통과 (5.20ms, 37.2MB)
    테스트 29 〉	통과 (4.91ms, 37.4MB)
    테스트 30 〉	통과 (4.45ms, 37.3MB)
    테스트 31 〉	통과 (0.08ms, 33.4MB)
    테스트 32 〉	통과 (0.09ms, 33.5MB)
    테스트 33 〉	통과 (0.06ms, 33.5MB)
    테스트 34 〉	통과 (0.09ms, 33.4MB)
    테스트 35 〉	실패 (시간 초과)
    테스트 36 〉	실패 (시간 초과)
    테스트 37 〉	실패 (시간 초과)
    테스트 38 〉	통과 (0.06ms, 33.4MB)
    테스트 39 〉	실패 (시간 초과)
    테스트 40 〉	통과 (0.18ms, 33.5MB)
    테스트 41 〉	실패 (시간 초과)
    테스트 42 〉	통과 (4.38ms, 37MB)
 */
function solution(s) {
  let offset = 0;
  let answer = 0;

  while (s.length > offset + 1) {
    let [x, y] = [0, 0];

    for (let i = offset; i < s.length; i++) {
      s[i] === s[offset] ? x++ : y++;
      if (x === y) {
        offset = i + 1;
        answer++;
        break;
      }

      if (i === s.length - 1) return answer + 1;
    }
  }

  if (s.length !== offset) answer++;
  return answer;
}

// console.log(solution()); //

console.log(solution('banana')); // 3
console.log(solution('abracadabra')); // 6
console.log(solution('aaabbaccccabba')); // 3
