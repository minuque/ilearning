// 逻辑题-山脉个数
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (!line.trim()) {
    console.log(0);
    return;
  }

  const arr = line.split(',').map(Number);
  let res = [];


  arr.forEach((item, index) => {
    if(index === 0 && arr[0] > arr[1]) {
      res.push(item);
    }


    if (index > 0 && index < arr.length - 1) {
      const first = arr[index - 1];
      const cur = item;
      const last = arr[index + 1];
      const flag = cur > last && cur > first;
      if (flag) {
        res.push(cur);
      }
    }

    if(index === arr.length -1 && item > arr[arr.length - 2]){
      res.push(item);
    }
  });

  console.log(res.length);
});

