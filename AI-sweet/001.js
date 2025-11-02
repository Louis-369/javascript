// 編號：AISWEET-001
// 程式語言：JavaScript
// 題目：找出陣列中出現最多次的元素，並回傳該元素
// 如果有多個元素出現次數相同，回傳第一個出現最多次的元素
// 例如：
//   [1, 2, 3, 2, 1, 2] 回傳 2
//   ["a", "b", "c", "a", "b", "a"] 回傳 "a"

// TODO: 先了解for (let 變數 of 可迭代物件)

function mostFrequent(arr) {
  const count = {}; // 用來記錄每個元素出現的次數
  let maxCount = 0; // 目前最多的出現次數
  let result = null; // 目前出現最多次的元素 result設沒有值

  for (let item of arr) {
    // 步驟1: 計數（如果不存在就設為0，然後+1）
    count[item] = (count[item] || 0) + 1;

    // 步驟2: 立即檢查是否需要更新最大值
    if (count[item] > maxCount) {
      maxCount = count[item];
      result = item;
    }
  }

  return result;

  // 實作程式碼寫在這裡
}

const list1 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const list2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const list3 = [true, false, true, true, false];

console.log(mostFrequent(list1)); // 印出 3 或 5 (都出現3次，但3先達到3次)
console.log(mostFrequent(list2)); // 印出 apple
console.log(mostFrequent(list3)); // 印出 true

// 提示：
// 1. 可以用物件來記錄每個元素出現的次數
// 2. 遍歷陣列時同時追蹤目前出現最多次的元素
// 3. 也可以先統計完所有次數後，再找出最大值
