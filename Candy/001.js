// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// 想法:使用查詢到的sort()排列印出 [0]+[1]
function sumOfSmallestValues(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
  // 實作程式碼寫在這裡
}
const result = sumOfSmallestValues([15, 28, 4, 2, 43]);
console.log(result);

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
