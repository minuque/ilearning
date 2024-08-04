// 寻找身高相近的小朋友
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  // 小明身高
  const h1 = parseInt(line.split(' ')[0]);

  rl.on('line', (line) => {
    const arr = line.split(' ').map(Number);
    const newArr = arr.map((h) => {
      return {
        diff: Math.abs(h - h1),
        h
      };
    });

    newArr
      .sort((a, b) => a.diff - b.diff)
      .sort((a, b) => {
        if (a.diff === b.diff) {
          return a.h - b.h;
        }
      });

    console.log(newArr.map((item) => item.h).join(' '));

    rl.close();
  });
});
