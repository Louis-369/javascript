const eng = ["a", "b", "c", "d", "e"];

// 索引值(從0開始)
console.log(eng[eng.length - 1]); //此法可拿最後一項

const nums = [1, 2, 3, 4, 5];

//  高階函數 Higher Order Function
// 1.使用別的函數當參數
// 2.回傳別的函數當回傳值
// 符合其一為高階函數

// forEach寫法 （可抓取每個元素）
nums.foreach(function (v) {
  console.log(v);
});

// // for迴圈寫法
for (let i = 0; i < 5; i += 1) {
  console.log(nums[i]);
}

for (let i = 0; i < nums.length; i += 1) {
  const n = nums[i];
  result.push(n * 2);
  console.log(result);
}

// map=搜集成陣列 對應對照 (有回傳值)
const result = nums.map(function (n) {
  return n * 2;
});
console, log(result);

const chars = ["a", "b", "c", "d", "e"];

const double = chars.map(function (x) {
  return x.repeat(2);
});
console.log(double);

// filter=對每個元素做判斷篩選 判斷function true false (有回傳值)

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 留下偶數[ 2, 4, 6, 8, 10 ]
const even = num2.filter(function (n) {
  return n % 2 == 0;
});
console.log(even);

// Ruduce 歸納
// const result= num.reduce(累進 acc,每回合cv){}

const all = nums.reduce(function (acc, cv) {
  return acc + cv;
}, 0);
console.log(all);

// 有給初始值
//  累進   每回合
// -----------
//   0  |  1
// -----------
//   1  |  2
// -----------
//   3  |  3
// -----------
//   6  |  4
// -----------
//  10  |  5
// -----------
//  15

// 沒給初始值
//  累進   每回合
// -----------
//   1  |  2
// -----------
//   3  |  3
// -----------
//   6  |  4
// -----------
//  10  |  5
// -----------
//  15

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 偶數
const evens = num2.filter(function (n) {
  return n % 2 == 0;
});
console.log(evens);
// 平方
const square = evensnum2.map(function (n) {
  return n ** 2 == 0;
});
console.log(square);
// 總和
const total = square.reduce(function (acc, cv) {
  return acc + cv;
}, 0);
console.log(total);

// 可縮寫成
const total = num2
  .filter(function (n) {
    return n % 2 == 0;
  })

  .map(function (n) {
    return n ** 2;
  })

  .reduce(function (acc, cv) {
    return acc + cv;
  }, 0);
console.log(total);

// 函數宣告
function a(x, y) {
  return 123;
}

// 匿名函數
const a = function (x, y) {
  return 123;
};

// 箭頭函數 (不是簡寫不完全相同)
const a = (x, y) => {
  return 123;
};

// 箭頭函數 v2 (大括號及return一起省略)
const a = (x, y) => 123;
