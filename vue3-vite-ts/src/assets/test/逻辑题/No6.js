// 寻找最富裕的小家庭
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', (line) => {
  // 成员数
  const num = parseInt(input[0]);
  // 成员财富值
  const moneyArr = input[1].split(' ').map(Number);
  moneyArr.unshift(0);

  for (let i = 0; i < input.length; i++) {
    if (i > 1) {
      const [N1, N2] = input[i].split(' ').map(Number);
      // 累加财富值
      moneyArr[N1] += moneyArr[N2];
    }
  }
  console.log(Math.max(...moneyArr));
});
