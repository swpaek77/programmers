function solution(orders, course) {
  var answer = [];

  // orders.reduce((pre, cur) => , [])
  [...orders.forEach(res => answer.push(...res.split('')))];

  // const aa = orders.map(
  //   res => res.split('').sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  //   // .join('')
  // );
  // console.log('aa', aa);

  return answer;
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // 	["WX", "XY"]
