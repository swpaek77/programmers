const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (start, end, target) => {
  if (start === end) {
    return nums[start];
  }

  const mid = Math.floor((start + end) / 2);
  if (nums[mid] < target) {
    return search(mid + 1, end, target);
  } else {
    return search(start, mid, target);
  }
};

console.log(search(0, 9, 8));
