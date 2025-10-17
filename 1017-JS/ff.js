// 函數
// 什麼是函數？ input / output 的對應關係 mapping

//               參數parameter
function sayHelloTo(someone, ...c) {
  console.log(someone);
  console.log(c);
}

sayHelloTo(1, 2, 3, 4); // 呼叫執行 sayHelloTo(引數argument)
// 缺：undenfined
// ... rest parameter
// 參數加＝可設預設值 如果沒引數可用
