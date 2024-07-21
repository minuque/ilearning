// 整数对最小和
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const size1 = parseInt(line.trim().charAt(0));
  const arr1 = line.trim().substring(2, line.length).split(' ').map(Number);

  rl.on('line', (line) => {
    const size2 = parseInt(line.trim().charAt(0));
    const arr2 = line.trim().substring(2, line.length).split(' ').map(Number);

    rl.on('line', (line) => {
      const k = parseInt(line);
      const res = [];

      /* key */
      arr1.forEach(a => {
        arr2.forEach(b => {
          res.push(a + b)
        })
      })

      const max = res.sort((a ,b) => a - b).slice(0 , k).reduce((pre, curr) => pre + curr, 0);

      console.log(max);
    });
  });
});
