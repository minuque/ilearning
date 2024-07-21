// 求最多可以派出多少个团队
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  // 总人数
  const sumCount = parseInt(line);

  rl.on('line', (line) => {
    // 能力值数组
    const arr = line.split(' ').map((item) => parseInt(item));

    rl.on('line', (line) => {
      const flag = parseInt(line);

      // 过滤满足要求成员
      const filterArr = arr.filter((item) => item < flag).sort((a, b) => a - b);

      // 单人满足能力值的成员个数
      const singleNum = arr.length - filterArr.length;

      let indexS = 0;
      let indexL = filterArr.length - 1;
      let res = 0;

      while (indexS < indexL) {
        if (filterArr[indexS] + filterArr[indexL] >= flag) {
          res++;
          indexS++;
          indexL--;
        } else {
          indexS++;
        }
      }

      console.log(res + singleNum);

      rl.close();
    });
  });
});
