function solution(encrypted_text, key, rotation) {
  const decodeArr = [...key].map(res => res.charCodeAt() - 96);
  const result = [...encrypted_text];

  for (let i = 0; i < Math.abs(rotation); i++) {
    if (rotation < 0) {
      const prev = result.pop();
      result.unshift(prev);
    } else {
      const prev = result.shift();
      result.push(prev);
    }
  }

  return result
    .map((res, idx) => {
      const newStringCode = res.charCodeAt() - decodeArr[idx];
      return String.fromCharCode(newStringCode < 97 ? 123 - (97 - newStringCode) : newStringCode);
    })
    .join('');
}

solution('qyyigoptvfb', 'abcdefghijk', 3);
