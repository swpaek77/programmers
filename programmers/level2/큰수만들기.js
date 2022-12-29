function solution(number, k) {
  const numberString = [...number];
  const max = Math.max(...numberString.slice(0, k + 1));
  const newString = numberString.slice(numberString.indexOf(max.toString())).join('');

  const recursive = (num, cut) => {
    if (cut === 0) return num;
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i + 1] > num[i]) {
        return recursive(num.replace(num[i], ''), cut - 1);
      }
    }
    return recursive(num.replace(num[num.length - 1], ''), cut - 1);
  };

  return recursive(newString, k - (number.length - newString.length));

  // const max = Math.max(...numberString.slice(0, -k + 1));
  // // console.log('max', numberString.indexOf(max.toString()));
  // const newString = numberString.slice(numberString.indexOf(max.toString()));
  // console.log(newString, answerLength);

  // return numberString.sort((a, b) => b - a).slice(0, -k);

  // let last = numberString[0];
  // const aa = numberString.filter(res => {
  //   if (res >= last) return res;
  //   last = res;
  //   return false;
  // });
  // console.log('aa', aa);
  // while(numberString.length){
  //   const a = numberString.shift()
  // }
}

function solution(number, k) {
  if (k === 0) return number;
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i + 1] > number[i]) {
      return solution(number.replace(number[i], ''), k - 1);
    }
  }
  return solution(number.replace(number[number.length - 1], ''), k - 1);
}

function solution(number, k) {
  const answer = [];
  const numArr = [...number];

  for (let i = 0; i < numArr.length; i++) {
    while (true) {
      if (k === 0 || !(answer.at(-1) < numArr[i])) break;
      answer.pop();
      k--;
    }
    answer.push(numArr[i]);
  }

  return k === 0 ? answer.join('') : answer.slice(0, -k).join('');
}

// function solution(number, k) {
//   if (k === 0) return number;
//   const numStr = [...number];
//   for (let i = 0; i < numStr.length - 1; i++) {
//     if (numStr[i + 1] > numStr[i]) {
//       return solution(numStr.filter((_, idx) => idx !== i).join(''), k - 1);
//     }
//   }
//   return solution(numStr.at(-1).join(''), k - 1);
// }

// console.log(solution('19', 1)); // '191'
// console.log(solution('11191', 2)); // '191'
// console.log(solution('1924', 2)); // '94'
// console.log(solution('1231234', 3)); // '3234'
// console.log(solution('4177252841', 1)); // '775841'
// console.log(solution('4177252841', 2)); // '775841'
// console.log(solution('4177252841', 3)); // '775841'
console.log(solution('4177252841', 4)); // '775841'
console.log(solution('4177252841', 5)); // '775841'
console.log(solution('4177252841', 6)); // '775841'
console.log(solution('4177252841', 7)); // '775841'
console.log(solution('4177252841', 8)); // '775841'
console.log(solution('4177252841238794102374980127349801723498012374089712930470192374091823749071234712037490123749172341', 1)); // '775841'
console.log(solution('41772528411', 9)); // '775841'
/**
 * 4177252841
 * 477252841
 * 77252841
 * 7752841
 * 775841
 * 77841
 * 7841
 * 841
 * 84
 * 8
 *
 * 4177252841
 * 417252841
 *
 * 77841
 */
