function solution(n) {
  let str = '';
  while (n > 0) {
    if (n % 3 === 0) {
      str = '4' + str;
      n = n / 3 - 1;
    } else if (n % 3 === 1) {
      str = '1' + str;
      n = Math.floor(n / 3);
    } else if (n % 3 === 2) {
      str = '2' + str;
      n = Math.floor(n / 3);
    }
  }

  return str;
}

// 3 9 27 81
// 4 12
// 3 6

console.log(solution(1)); //1
console.log(solution(2)); //2
console.log(solution(3)); //4
console.log(solution(4)); //11
console.log(solution(5)); //12
console.log(solution(6)); //14
console.log(solution(7)); //21
console.log(solution(8)); //22
console.log(solution(9)); //24
console.log(solution(10)); //41
console.log(solution(11)); //42
console.log(solution(12)); //44
console.log(solution(13)); //111
console.log(solution(14)); //112
console.log(solution(15)); //114
console.log(solution(16)); //121
console.log(solution(17)); //122
console.log(solution(18)); //124
console.log(solution(19)); //141
console.log(solution(20)); //142
console.log(solution(21)); //144
console.log(solution(22)); //211

// 1	1   1
// 2	2   2
// 3	4   3
// 4	11  10
// 5	12  11
// 6	14  12
// 7	21  13
// 8	22  20
// 9	24
// 10	41
