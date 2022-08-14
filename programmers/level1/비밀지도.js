function solution(n, arr1, arr2) {
  let answer = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    const [num1, num2] = getBinary(n, arr1[idx], arr2[idx]);

    let secret = '';
    for (let i = 0; i < num1.length; i++) {
      secret += num1[i] === '1' || num2[i] === '1' ? '#' : ' ';
    }

    answer.push(secret);
  }
  return answer;
}

function getBinary(n, num1, num2) {
  let bNum1 = num1.toString(2);
  let bNum2 = num2.toString(2);
  const len1 = bNum1.length;
  for (let i = 0; i < n - len1; i++) {
    bNum1 = '0' + bNum1;
  }
  const len2 = bNum2.length;
  for (let i = 0; i < n - len2; i++) {
    bNum2 = '0' + bNum2;
  }
  return [bNum1, bNum2];
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

//	["#####","# # #", "### #", "# ##", "#####"]

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

//	["######", "### #", "## ##", " #### ", " #####", "### # "]
