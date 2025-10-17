// 變數 variable

// 變數宣告
// ES6=2015 ,let / const 2015加入的
// 三種 var / let(不會初始化) / const(不會初始化）

var age = 18;
console.log(age);

// 變數提升 variable hoisting 分建立期（取得註冊名稱(identifier)且進行初始化）及執行期（賦予值及執行函數）兩個階段
// 初始化＝undefined

// 常數宣告
// const不可變的變數＝常數（不能重複賦予值re-assign）

// 使用時機 const > let >>>>> var >>>>>>>>>>>>>>>>>>> 不宣告
// 優先const不能重複賦予值時用let
// 全域變數
// null(沒有) vs undefined(有，還不知道是什麼)
// NAN= Not A Number =不是數字
// 判斷是否為NAN
const a = NaN;
if (a != a) {
  console.log(`yes`);
} else {
  console.log(`no`);
}
// +可以當成字串相加或數字相加
// -因為字串沒有減法，所以一律當數字
// 判斷單數
const Num = 1;
if (Num % 2 != 0) {
  console.log(`單數`);
} else {
  console.log(`偶數`);
}
// and &&   or ||  not !
// 迴圈 for / while
// for (期始值;判斷條件;每回合都會左的事) {
//     console.log(`hello`);
// }
// while (條件){
// }
let i;
for (i = 0; i < 5; i = i + 1) {
  console.log(`hello`);
}
//注意block{
// }
for (let j = 0; j < 10; j = j + 1) {
  if (j % 2 == 0) {
    console.log(j);
  }
}

let k = 0;
while (k < 10) {
  console.log(k);
  k = k + 1;
}

// continue 進入下一回合 break 結束
