// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// 想法 判斷陣列內的基偶數，且能用if...else判斷陣列中偶數多還是基數多再印出

//詢問AI後用return會立即結束函數的特性擋下另一個回傳值

function findSomeDifferent(numbers) {
  const evens = numbers.filter(function (n) {
    return n % 2 === 0;
  });
  const odds = numbers.filter(function (n) {
    return n % 2 !== 0;
  });

  if (evens.length < odds.length) {
    return evens; // 返回所有偶數
  } else {
    return odds; // 返回所有奇數
  }
  // 實作寫在這裡
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
