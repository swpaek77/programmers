function solution(arr) {
  let last = '';
  return arr.filter(res => {
    if (res === last) {
      return false;
    }
    last = res;
    return true;
  });
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //	[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //[4,3]
