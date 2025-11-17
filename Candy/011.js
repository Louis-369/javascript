// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

//想法 看到元素與值的組合會想做成物件 之後去篩出奇數再去比較次數
//難點 不知道怎麼陣列跟物件做連結
function findOddElm(numbers) {
  const count = {};
  numbers.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
    //  元素賦予值          若無值則是0
  });
  for (let num in count) {
    // 遍歷物件(count)裡的元素（num），每個元素都有自己的value
    if (count[num] % 2 !== 0) {
      // 如果value是基數
      return Number(num);
      //則回傳
    }
  }

  // 實作寫在這裡
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

// 如果增加條件：出現次數最多 （動態檢查好用）
//  let maxCount = 0;
//  let maxNum = null;
// if (count[key] 當前次數[元素] > maxCount 最大次數) {
//       maxCount = count[key]; （值）
//       maxNum = key;  （元素）
