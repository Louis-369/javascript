const x = 1;
function add(a: number, b: number) {
  return a + b;
}
console.log(x);
console.log(add);

let a: number = 1;
a = 2;
console.log(a);

const nums: number[] = [];
nums.push(1);
nums.push("a");
nums.push("2");

type Person = {
  name: string;
  age: number;
  magic?: boolean;
  status?: "a" | "b" | "c";
};
interface Person {
  name: string;
  age: number;
  magic?: boolean;
  status?: "a" | "b" | "c";
}
const hero: Person = {
  name: "cc",
  age: 20,
  status: "a",
};

const mage: Person = {
  name: "cc",
  age: 20,
  magic: true,
  status: "b",
};
console.log(hero, mage);
