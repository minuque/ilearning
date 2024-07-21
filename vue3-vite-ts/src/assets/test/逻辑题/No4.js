// 环中最长子串/字符成环找偶数O
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const arr1 = line.trim().split('');

  // o字符个数
  let oNum = 0;

  arr1.forEach((item, index) => {
    if (item === 'o') {
      oNum++;
    }
  });

  const res = [];

  // 1.如果字符串中含有偶数个“o”字符，输出字符串本身长度
  if (oNum % 2 === 0) {
    console.log(arr1.length);
  } else {
    // 2.如果字符串中含有奇数个“o”字符，输出字符串本身长度 - 1
    console.log(arr1.length - 1);
  }
  rl.close();
});
