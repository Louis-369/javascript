// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];
// 查到charCodeAt轉換字符的 UTF-16 編碼以去尋找缺少的編碼，再轉字元
function missingChar(chars) {
  // 先排列
  chars.sort();
  //  設定要抓的缺少字元
  const missingchar = [];
  // 陣列第一位轉為編碼
  const start = chars[0].charCodeAt(0);
  // 陣列墨位轉為編碼
  const end = chars[chars.length - 1].charCodeAt(0);
  //
  for (let code = start; code <= end; code += 1) {
    //  編碼轉回字元String.fromCharCode
    const char = String.fromCharCode(code);
    if (!chars.includes(char)) {
      // 要是不包含則加入missing
      missingchar.push(char);
    }
  }
  return missingchar;
  // 實作寫在這裡
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
