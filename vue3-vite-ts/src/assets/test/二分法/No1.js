// 爱吃蟠桃的孙悟空
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  // 桃子数
  const treeArr = line.trim().split(' ').map(Number);
  rl.on('line', (line) => {
    // 离开小时
    const hour = parseInt(line);

    if (hour >= 10000 || hour <= 0) {
      console.log(0);
      return;
    }

    if (treeArr.length >= 10000 || treeArr.length <= 0 || treeArr.length > hour) {
      console.log(0);
      return;
    }

    function canFinish(arr, speed) {
      let res = 0;
      arr.forEach((num) => {
        res += Math.ceil(num / speed);
      });

      return res <= hour;
    }

    let left = 0;
    let right = 100000000;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (canFinish(treeArr, mid)) {
        right = mid
      } else {
        left ++;
      }
    }

    console.log(left);
  });
});
