function solution(dartResult) {
  let index = 0;
  let result = [0, 0, 0];
  let resultCount = 0;

  const bonus = ['S', 'D', 'T'];
  const effect = ['*', '#'];

  for (let i = 0; i < dartResult.length; i++) {
    /**
     * 1. 점수 자르기
     */
    const res = bonus.findIndex(res => res === dartResult[i]);
    if (res === -1) continue;

    /**
     * 2. 점수 확인
     */
    let current = '';
    for (let j = index; j < i; j++) {
      current += dartResult[j];
    }
    current = Number(current);

    /**
     * 3. S, D, T 계산
     */
    current = Math.pow(current, res + 1);

    /**
     * 4. 효과 계산
     */
    if (i + 1 < dartResult.length && effect.includes(dartResult[i + 1])) {
      if (dartResult[i + 1] === '*') {
        current *= 2;
        if (resultCount > 0) {
          result[resultCount - 1] *= 2;
        }
      } else if (dartResult[i + 1] === '#') {
        current = -current;
      }
      index = i + 2;
    } else {
      index = i + 1;
    }

    /**
     * 5. 결과 저장
     */
    result[resultCount++] = current;
  }
  return result.reduce((pre, cur) => pre + cur, 0);
}

console.log(solution('1S2D*3T')); // 37	11 * 2 + 22 * 2 + 33
console.log(solution('1D2S#10S')); // 9	12 + 21 * (-1) + 101
console.log(solution('1D2S0T')); // 3 12 + 21 + 03
console.log(solution('1S*2T*3S')); // 23	11 * 2 * 2 + 23 * 2 + 31
console.log(solution('1D#2S*3S')); // 5	12 * (-1) * 2 + 21 * 2 + 31
console.log(solution('1T2D3D#')); // -4	13 + 22 + 32 * (-1)
console.log(solution('1D2S3T*')); // 59	12 + 21 * 2 + 33 * 2
