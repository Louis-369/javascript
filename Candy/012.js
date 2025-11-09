// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

// 想法 數字先轉字串再用.split再用 if  配合reduce加總持續直到只有陣列[0]最後return
// 在if迴圈時直接遞迴呼叫自己
// 參數設錯陣列[0] ，不如比較值比較直觀
const numberReducer = (num) => {
  const singlenum = num.toString().split("").map(Number);
  //                  數字轉陣列     再分割    遍歷每個元素轉數字
  const total = singlenum.reduce((acc, current) => {
    return acc + current;
  });
  if (total > 9) {
    // 若數字到十位數 這邊>10會出錯，因為10>10會進else
    return numberReducer(total);
    // 則遞迴呼叫自己（回去再跑一遍）;
  } else {
    return total;
  }
  // 實作寫在這裡
};
console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9
