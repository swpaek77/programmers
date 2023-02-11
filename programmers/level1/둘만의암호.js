function solution(s, skip, index) {
  let cursor = 97;
  const skipCodeArr = [...skip].map(str => str.charCodeAt());
  const alphabetList = Array.from({ length: 26 - skipCodeArr.length }, () => {
    while (skipCodeArr.includes(cursor++)) {}
    return cursor - 1;
  });

  return [...s]
    .map(str => {
      const idx = alphabetList.indexOf(str.charCodeAt()) + index;
      return String.fromCharCode(alphabetList[idx % alphabetList.length]);
    })
    .join('');
}

console.log(solution('aukks', 'wbqd', 5)); // "happy"
