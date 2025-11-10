// closure 閉包
// breakpoint 中斷點

function hi() {
  var a = 1;
  var b = 2;

  function hey() {
    console.log(a);
  }

  return hey;
}

const h = hi();
h();

//
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 333

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 012

// IIFE - Immediately Invoked Function Expression
((x) => {
  console.log(x);
})(123);

//
const arr = ["a", "b", "c"];

// 印出 a, b, c

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

arr.forEach((item) => {
  console.log(item);
});

for (let o in arr) {
  console.log(arr[o]);
}

for (let o of arr) {
  console.log(o);
}
