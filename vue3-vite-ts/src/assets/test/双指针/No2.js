// 双指针-最长的指定瑕疵度的元音子串 [aeiouAEIOU]
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const flaw = parseInt(line);
  rl.on('line', (line) => {
    let a = 0;
    let b = 0;
    let c = 0;
    const res = [];
    const content = line.trim();
    const flagIndex = [];

    // 标记元音字符的位置索引
    for (let i = 0; i < content.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].includes(content.charAt(i).toLowerCase())) {
        flagIndex.push(i);
      }
    }

    while (b < content.length) {
      const diff = flagIndex[b] - flagIndex[a] - (b - a);

      if (diff > flaw) {
        a++;
        continue;
      }

      if (diff === flaw) {
        res.push(flagIndex[b] - flagIndex[a] + 1);
      }

      b++;
    }

    if (!res.length) {
      console.log(0);
    } else {
      console.log(Math.max(res));
    }

    rl.close();
  });
});
