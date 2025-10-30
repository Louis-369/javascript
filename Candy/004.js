// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// 想法:一層一層的除下去
//      發現直接除60會有小數問題
//      查到用.floor() 是向下取整，直接捨去小數，取≤原數的最大整數
//      答案正確但格式不同 從const 改成let，後面會重新賦予值
//      查到.padStart(目標長度, 填充字元)能填充字元

function humanReadableTimer(seconds) {
  let s = seconds % 60;
  let m = Math.floor((seconds % 3600) / 60);
  let h = Math.floor(seconds / 3600);

  s = String(s).padStart(2, "0");
  m = String(m).padStart(2, "0");
  h = String(h).padStart(2, "0");

  console.log(`${h}:${m}:${s}`);
  // 實作在這裡
}
console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
