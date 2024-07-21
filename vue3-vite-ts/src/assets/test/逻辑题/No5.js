// 找座位

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const arr = line.split('').map(Number);
  let index = 0;
  let num = 0;

  while (index < arr.length) {
    const a = arr[index - 1];
    const b = arr[index];
    const c = arr[index + 1];

    if (!a && !b && !c) {
      index += 2;
      num++;
    } else {
      index++;
    }
  }

  console.log(num);
});
