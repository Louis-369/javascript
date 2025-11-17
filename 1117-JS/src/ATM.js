class ATM {
  constructor(Amount) {
    this.Account = Amount;
  }
  deposit(money) {
    this.Account = this.Account + money;
  }
  balance() {
    return this.Account;
  }
}
export { ATM };
