// 游戏分组/王者荣耀
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 差值
let res = Number.MAX_SAFE_INTEGER;
let totalSum = 0;

/**
 * dfs函数
 * @param arr 当前数组
 * @param index 数组索引
 * @param count 第一个队伍成员数
 * @param currNum 第一个队伍当前战力值
 */
function dfs(arr, index = 0, count = 0, currNum = 0) {
  // 选满一队更新最小值
  if (count === 5) {
    const other = totalSum - currNum;
    res = Math.min(Math.abs(currNum - other), res);
    return;
  }

  if (index === 10) return;
  // 选当前
  dfs(arr, index + 1, count + 1, arr[index] + currNum);
  // 不选当前
  dfs(arr, index + 1, count, currNum);
}

rl.on('line', (line) => {
  const arr = line.split(' ').map(Number);
  totalSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  dfs(arr);
  console.log(res);
});
