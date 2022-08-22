function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
}

console.log(solution(['sun', 'bed', 'car'], 1)); //	["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); //	["abcd", "abce", "cdx"]
