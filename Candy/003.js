// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

//想法：直接抽出0再push進去（笨方法位置太死.splice可能拉錯 ）
let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const F0 = list.splice(2, 1);
  //考慮到.splice後陣列長度改變
  const S0 = list.splice(4, 1);
  result = list.push(0, 0);
  return list;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//想法2：陣列常用的 .map(轉換不移動) .forEach(修改時陣列長度改變會亂)  .filter（可以過濾要與不要的再組合）

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const nozero = arr.filter((item) => item !== 0);
  const zero = arr.filter((item) => item === 0);
  return [...nozero, ...zero];
}

let result2 = moveZerosToEnd(list);
console.log(result2); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
