// 物件導向程式設計 Object-Oriented Programming, OOP
// 物件導向 = OO

// 類別 class
// 實體 instance
// 實體化、具象化
// 易讀性

class HeroCreator {
  // 建構子
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  attack() {
    console.log("ATTACK!");
  }
}

const h1 = new HeroCreator("cc", 18);

console.log(h1);
h1.attack();

class 靈長目 {
  握() {}
}

// 繼承 inheritance
class 人 extends 靈長目 {}

class 猩 extends 靈長目 {}

const me = new 人();
me.握();
const monkey = new 猩();
monkey.握();

// this 代名詞
// 1. 誰呼叫，誰就是 this；沒人呼叫，this = 全域變數(window/global)
// 2. 是否有使用「箭頭函數」（箭頭函數沒有 this / arguments）
// 3. 是否有使用「new」
// 4. 是否有使用「apply」「call」「bind」
// 5. 是否有開啟「嚴格模式（Strict Mode）」
// this 規則
