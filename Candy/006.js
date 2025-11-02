// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

//想法 由於發現不一樣的值都是最大值 所以先用sort排列取出最後一個值即可
// 缺點 事後諸葛 剛好都是最大值
function findDifferent(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1];
  // 實作寫在這裡
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// 想法2 若只有一個異值則可以檢查indexOf ===lastIndexOf(num) 則符合條件rerurn

function findDifferent(numbers) {
  return numbers.find(function (num) {
    const firstIndex = numbers.indexOf(num);
    const lastIndex = numbers.lastIndexOf(num);
    return firstIndex === lastIndex;
  });
  // 實作寫在這裡
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
