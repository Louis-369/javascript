function heroCreator(name, age) {
  const hero = {
    name: name,
    age: age,
  };
  hero.__proto__ = {
    attack: function () {
      console.log("attack");
    },
  };
  return hero;
}
const h1 = heroCreator("cc", 18);
const h2 = heroCreator("bb", 32);
// 所以東西都有可使用 .＿_proto__ 屬性
// function專有 prototype

// 或是

function heroCreator(name, age) {
  //1.this-->{ }
  this.name = name;
  this.age = age;
  // 2.reture this不用特別打return會出錯
}

const h3 = new heroCreator("gg", 18);
