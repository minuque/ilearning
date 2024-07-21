// 密码输入检测
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let pw = line?.trim();

  if (!pw) {
    console.log(pw, false);
    return;
  }

  const arr = pw
    ?.split('')
    .filter((item, index, self) => {
      if (self[index + 1] !== '<') {
        return true;
      }
    })
    .filter((item) => item !== '<');

  const isLen = arr.length >= 8;

  let isSmall = false;
  let isBig = false;
  let isNum = false;
  let isSpec = false;

  arr.forEach((item) => {
    if (/[a-z]/.test(item)) {
      isSmall = true;
    } else if (/[A-Z]/.test(item)) {
      isBig = true;
    } else if (/[0-9]/.test(item)) {
      isNum = true;
    } else {
      isSpec = true;
    }
  });

  console.log(arr.join('') + ',' + (isLen && isSmall && isBig && isNum && isSpec));
});
