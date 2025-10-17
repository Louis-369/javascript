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
// 沒加return印出來會是undefined
// f(x)=3x+2
// 3 => 11回傳值
// 回傳值一定要印出來

// 計算BMI
// 體重/身高＾2，身高用公尺單位
function calcBMI(height, weight) {
  const h = height / 100;
  const result = weight / (h * h);
  return result;
}
const bmi = calcBMI(180, 80);
console.log(bmi);
