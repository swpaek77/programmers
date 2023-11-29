class MinHeap {
  heap = [null];

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[par] > this.heap[cur]) {
      this.swap(par, cur);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) {
      this.heap = [null];
      return min;
    }
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let rightIdx = 3;

    while (this.heap[left] < this.heap[cur] || this.heap[rightIdx] < this.heap[cur]) {
      const minIdx = this.heap[left] > this.heap[rightIdx] ? rightIdx : left;
      this.swap(minIdx, cur);
      cur = minIdx;
      left = cur * 2;
      rightIdx = cur * 2 + 1;
    }

    return min;
  }
}

function solution(scoville, K) {
  const instance = new MinHeap();
  scoville.forEach(res => instance.push(res));

  let count = 0;
  while (instance.heap.length > 1) {
    if (instance.heap[1] >= K) {
      break;
    }
    const first = instance.pop();
    const second = instance.pop();
    if (!second) {
      break;
    }
    instance.push(first + second * 2);
    count++;
  }

  return count;
}
