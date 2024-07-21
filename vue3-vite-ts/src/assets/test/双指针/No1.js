// 字符串判判定
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (stringS) => {
  rl.on('line', (stringL) => {
    const arr1 = stringS.split('');
    const arr2 = stringL.split('');

    let indexS = 0;
    let indexL = 0;

    while (indexS < arr1.length && indexL < arr2.length) {
      if (arr1[indexS] === arr2[indexL]) {
        indexS++;
      }
      indexL++;
    }

    if (indexS === arr1.length) {
      console.log(indexL - 1);
    } else {
      console.log(-1);
    }

    rl.close();
  });
});
