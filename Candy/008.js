// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

// 想法：先把每個小寫英文字母賦予值（分數），將字串用split切空格分成陣列，把每個元素轉換成分數再用.sort由大到小，最終印出陣列[0]

// 改進1：之前有碰到charCodeAt()直接代替賦值，且記得扣除基礎分數-96，也是難點

//改進2 : .sort由大到小排列會需要設定物件與分數掛鉤 能改用動態檢查最高者最後return

//最後的動態檢查，很像reduce整題解法有機會更進階

function highestScoreWord(input) {
  let word = input.split(" ");
  let maxScore = 0;
  let maxWord = "";
  //由於charCodeAt()是轉換單字不是詞，須在每個元素中個別計算
  for (let i = 0; i < word.length; i++) {
    let score = 0;
    let currentWord = word[i];

    for (let j = 0; j < currentWord.length; j++) {
      score = score + currentWord[j].charCodeAt(0) - 96;
    }
    if (score > maxScore) {
      maxScore = score;
      maxWord = currentWord;
    }
  }
  return maxWord;
  // 實作寫在這裡
}
console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
