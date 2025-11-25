const hero = {
  name: "cc",
  age: 18,
};

// console.log(hero);
// console.log(JSON.stringify(hero));

localStorage.setItem("aa", JSON.stringify(hero));
const result = localStorage.getItem("aa");
const data = JSON.parse(result);
console.log(data);
