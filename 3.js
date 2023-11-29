function solution(n) {
  console.time('a');
  let unavailableDragon = 0;
  let availableDragon = [];
  let dragonEgg = [2];

  for (let i = 0; i <= n; i++) {
    dragonEgg = dragonEgg
      .filter(res => {
        if (res === 0) {
          availableDragon.push(4);
          return false;
        }
        return true;
      })
      .map(res => (res > 0 ? res - 1 : res));

    availableDragon = availableDragon
      .filter(res => {
        if (res === 0) {
          unavailableDragon++;
          return false;
        }
        return true;
      })
      .map(res => {
        if (res > 0) {
          dragonEgg.push(1);
          return res - 1;
        }
        return res;
      });
    console.log('dragonEgg, availableDragon', dragonEgg, availableDragon);
  }
  console.timeEnd('a');
  return unavailableDragon + availableDragon.length + dragonEgg.length;
}

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
};

String.prototype.removeStr = function (index) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + this.substring(index + 1);
};

// function solution(n) {
//   let unavailableDragon = 0;
//   let availableDragon = '';
//   let dragonEgg = '1';

//   for (let i = 0; i < n; i++) {
//     // for (let j = 0; j < dragonEgg.length; j++) {
//     //   if (dragonEgg[j] === '0') {
//     //     availableDragon += '4';
//     //   }
//     // }
//     const oneIdx = dragonEgg.indexOf('1');
//     availableDragon += '4'.repeat(dragonEgg.length - oneIdx === -1 ? 0 : oneIdx + 1);
//     dragonEgg = dragonEgg.replace(/0/g, '').replace(/1/g, '0');

//     for (let j = 0; j < availableDragon.length; j++) {
//       if (availableDragon[j] === '0') {
//         unavailableDragon++;
//       } else {
//         dragonEgg += '1';
//       }
//     }
//     availableDragon = availableDragon.replace(/0/g, '').replace(/1/g, '0').replace(/2/g, '1').replace(/3/g, '2').replace(/4/g, '3');
//   }
//   return unavailableDragon + availableDragon.length + dragonEgg.length;
// }

function solution(n) {
  let unavailableDragon = 0;
  let availableDragon = '';
  let dragonEgg = '1';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < dragonEgg.length; j++) {
      const num = Number(dragonEgg[j]);
      if (num === 0) {
        availableDragon += '4';
      }
    }
    dragonEgg = dragonEgg.replace(/0/g, '').replace(/1/g, '0');

    for (let j = 0; j < availableDragon.length; j++) {
      const num = Number(availableDragon[j]);
      if (num === 0) {
        unavailableDragon++;
      }
      if (num > 0) {
        dragonEgg += '1';
      }
    }
    availableDragon = availableDragon.replace(/0/g, '').replace(/1/g, '0').replace(/2/g, '1').replace(/3/g, '2').replace(/4/g, '3');
  }
  return unavailableDragon + availableDragon.length + dragonEgg.length;
}

console.log(solution(6));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

1;
