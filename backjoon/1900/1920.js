const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n')
  .map(res => res.split(' ').map(Number))
  .filter((_, idx) => idx !== 0 && idx !== 2);

const [answer, option] = input;

const search = (nums, start, end, target) => {
  if (start === end) {
    return nums[start] === target ? 1 : 0;
  }

  const mid = Math.floor((start + end) / 2);
  if (nums[mid] < target) {
    return search(nums, mid + 1, end, target);
  } else {
    return search(nums, start, mid, target);
  }
};

answer.sort();
option.forEach(res => {
  console.log(search(answer, 0, answer.length - 1, res));
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}
