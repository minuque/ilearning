// 考勤信息
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * absent: 缺勤
 * late: 迟到
 * leaveearly: 早退
 * present: 正常上班
 */

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  // 考勤人数
  const num = parseInt(input[0]);
  // 每人考勤情况
  const arr = [];
  input.forEach((item, index) => {
    if (index > 0) {
      arr.push(item.split(' '));
    }
  });

  // 考勤结果
  const res = arr.map(() => false);

  arr.forEach((item, index) => {
    // 缺勤不超过一次
    const a = item.filter((i) => i === 'absent').length <= 1;
    // 没有连续的迟到早退
    const b = !item.some((i, index) => {
      ['late', 'leaveearly'].includes(i) && ['late', 'leaveearly'].includes(item[index + 1]);
    });

    // 任意连续7次考勤，缺勤/迟到/早退不超过三次
    const temp = [];
    item.forEach((i, index) => {
      if (['absent', 'late', 'leaveearly'].includes(i)) {
        temp.push(index);
      }
    });

    const c = !temp.some((item, index) => {
      if (index + 2 < temp.length - 1) {
        return temp[index + 2] - item < 6;
      }
    });

    res[index] = a && b && c;


  });
  console.log(res.join(' '))
});
