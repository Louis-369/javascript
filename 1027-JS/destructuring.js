const cat = {
  name: "kitty",
  age: "18",
};

const { name, age } = cat;
//會等於下面兩個宣告
// const name = cat.name
// const age = cat.age

// const { name: username, age } = cat;
// 只是別名
// console.log(username);      // "kitty" ✅ 新變數
// console.log(cat.username); // undefined ❌ cat 沒有這個屬性

const d = document.createElement("div");
d.id = "ss";
d.textContent = "123";
d.className = "ccc";
d.classList.add("ddd");
d.classList.remove("ccc");
// classList 改DOMTokenList 物件 （非陣列）
// className 改字串

console.log(d);

const btn = document.querySelector("#btn");
const title = document.querySelector("#title");

btn.addEventListener("click", () => {
  if (title.className.includes("red")) {
    title.classList.remove("red");
    title.classList.add("blue");
  } else {
    title.classList.remove("blue");
    title.classList.add("red");
  }
});
// .toggle 切換
const s = document.querySelector("#switch");
const p = document.querySelector("body");

s.addEventListener("click", () => {
  const ul = document.createElement("ul");

  for (let i = 1; i <= 10; i += 1) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = i;
  }
  p.append(ul);
});

import xxx from "dayjs";
console.log(xxx);
