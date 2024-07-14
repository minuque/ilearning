testFn(0, 'caeiou');

function testFn(flaw, line) {
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
    // 计算瑕疵度
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
    console.log(Math.max(...res));
  }
}
