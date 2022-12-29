function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let truckArr = [{ length: bridge_length, weight: truck_weights.shift() }];

  while (truckArr.length) {
    truckArr = truckArr.map(res => ({ ...res, length: res.length - 1 })).filter(res => res.length);
    const curBridge = truckArr.reduce((pre, cur) => pre + cur.weight, 0);
    if (curBridge + truck_weights[0] <= weight && truck_weights.length) {
      truckArr.push({ length: bridge_length, weight: truck_weights.shift() });
    }
    time++;
  }

  return time + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
