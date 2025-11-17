function add(a, b) {
  return a + b;
}
test("測試 add", () => {
  expect(add(1, 2)).toBe(3);
});
// 先寫測試 再寫程式 再寫實作

// 存錢功能
// 可以存錢
// 不可以存 0 元或是小於 0 元的金額（越存錢越少！）

// 領錢功能
// 可以領錢
// 不能領 0 元或是小於 0 元的金額（越領錢越多！）
// 不能領超過本身餘額

// import { ATM } from "../src/ATM";

// - **Arrange（準備）**：建立情境、資料、測試替身（mocks、stubs）、環境設定。
// - **Act（執行）**：呼叫被測行為。只做一次、只做這件事。
// - **Assert（斷言）**：檢查結果與互動是否符合預期，應該自動判定通過或失敗。
class ATM {
  constructor(Amount) {
    this.Account = Amount;
  }
  deposit(money) {
    if (money == 0) {
      throw "金額不得為0";
    }
    if (money < 0) {
      throw "金額不得為負值";
    }
    this.Account = this.Account + money;
  }
  withdraw(money) {
    if (money == 0) {
      throw "金額不得為0";
    }
    if (money < 0) {
      throw "金額不得為負值";
    }
    if (money > this.balance()) {
      throw "看看你沒錢了餘額不足";
    }
    // 有可能餘額不等於存款，可能有應付帳款
    this.Account = this.Account - money;
    return money;
  }
  balance() {
    return this.Account;
  }
}

test("可以存錢", () => {
  //建立ATM
  const atm = new ATM(10);
  //存錢
  atm.deposit(5);

  //看餘額
  expect(atm.balance()).toBe(15);
});
describe("存錢功能", () => {
  it("不可以存 0 元", () => {
    const atm = new ATM();
    //2.嘗試存 0 元
    expect(() => {
      atm.deposit(0);
    }).toThrow("金額不得為0");

    //3.嘗試存負數
    expect(() => {
      atm.deposit(-100);
    }).toThrow("金額不得為負值");

    expect(atm.balance()).toBe();
    // 3A
  });
});

// .toThrow 出來的訊息必須跟expect出來的一模一樣包含空格

describe("領錢功能", () => {
  it("可以領錢", () => {
    // 建立ATM
    const atm = new ATM(10);
    // 2.領錢
    const amount = atm.withdraw(3);
    // 3.餘額
    expect(atm.balance()).toBe(7);
  });

  it("不能0元或是負值領錢", () => {
    // 建立ATM
    const atm = new ATM(10);
    //2.嘗試領 0 元
    expect(() => {
      atm.withdraw(0);
    }).toThrow("金額不得為0");

    //3.嘗試領負數
    expect(() => {
      atm.withdraw(-100);
    }).toThrow("金額不得為負值");
  });
  it("不能領超過本身餘額", () => {
    // 建立ATM
    const atm = new ATM(10);
    //嘗試領超過餘額
    expect(() => {
      atm.withdraw(20);
    }).toThrow("看看你沒錢了餘額不足");
  });
});
