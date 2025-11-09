// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

// 想法  用.spilt 分開每個數字，個別乘上自己的位數，最後印出
// 改進1 需先把數字轉為字串.split只能用在字串上
// 改進2 .join 需要傳入 " + " 作為分隔符號
// 改進3 建立[]更容易調整到自己要的格式

function expandedForm(num) {
  const result = [];
  const open = num.toString().split("");

  for (let i = 0; i < open.length; i++) {
    const current = open[i];
    const placeValue = 10 ** (open.length - i - 1); //次方
    if (current != "0") {
      //當位數為0
      if (placeValue === 1) {
        result.push(current);
      } else {
        result.push(`${placeValue} x ${current}`);
      }
    }
  }
  return result.join(" + ");
  // 實作寫在這裡
}
console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8
//你的電腦被入侵了 普發我們2000 （共三人） 就幫你解鎖
