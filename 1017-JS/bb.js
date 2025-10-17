for (let i = 1; i < 10; i = i + 1) {
  for (let j = 1; j < 10; j = j + 1) {
    // const result = i + "x" + j + "=" + i * j;
    const text = `${i} x ${j}= ${i * j}`;
    console.log(text);
  }
}

// i=i+1  可縮寫層 i+=1

for (let i = 1; i < 6; i = i + 1) {
  console.log("*".repeat(i));
}

for (let i = 1; i < 5; i = i + 1) {
  const star = "*".repeat(i * 2 - 1);
  const spaces = " ".repeat(5 - i);
  const text = `${spaces}${star}`;
  console.log(text);
}
