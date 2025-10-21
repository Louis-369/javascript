// 事件監聽器 event listener
document.addEventListener("DOMContentLoaded", () => {
  const d = document.querySelector("#hi")
  console.log(d)
})

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
  const div = document.querySelector("#hi")
  const currentText = div.textContent

  if (currentText == "Hello") {
    div.textContent = "World"
  } else {
    div.textContent = "Hello"
  }
})

const btnUp = document.querySelector("#btnUp")
const btnDown = document.querySelector("#btnDown")
const quantity = document.querySelector("#quantity")

btnUp.addEventListener("click", () => {
  const currentValue = Number(quantity.value)
  quantity.value = currentValue + 1
})

btnDown.addEventListener("click", () => {
  const currentValue = Number(quantity.vaule)
  if (currentValue > 1) {
    quantity.vaule = currentValue - 1
  }
})
// 或做Early return
