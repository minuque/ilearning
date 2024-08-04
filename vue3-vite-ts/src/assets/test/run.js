const arr = '1 2 3 4 5 6 7 8 9 10'.split(' ').map(Number);
let totalSum = arr.reduce((a, b) => a + b, 0);
let res = Number.MAX_SAFE_INTEGER;

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

dfs(arr);
console.log(res);
