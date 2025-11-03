// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

//想法 想到印出陣列的字串時不會有""，將字串轉換成陣列，印出陣列[0]
function removeAnchor(url) {
  let noAnchor = url.split("#");
  //若沒有＃則為單一元素，若有＃則能切分＃前後
  return noAnchor[0];
  // 實作寫在這裡
}

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1
