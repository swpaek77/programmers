function solution(s, n) {
  return String.fromCharCode(
    ...s.split('').map(res => {
      const ascii = res.charCodeAt();
      const asciiSecret = ascii + n;
      if (ascii >= 65 && ascii <= 90) return asciiSecret > 90 ? asciiSecret - 26 : asciiSecret;
      if (ascii >= 97 && ascii <= 122) return asciiSecret > 122 ? asciiSecret - 26 : asciiSecret;
      return ascii;
    })
  );
}

console.log(solution('AB', 1)); // "BC"
console.log(solution('z', 1)); // "a"
console.log(solution('a B z', 4)); // "e F d"
