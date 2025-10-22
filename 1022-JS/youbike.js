const btnsearch = document.querySelector(".btn-search")
const inputbox = document.querySelector(".input-box")
const list = document.querySelector(".list")
// 參考答案沒注意到的地方--------------------
const form = document.querySelector("#searchForm")
form.addEventListener("submit", (e) => {
  // 把原本 Form 的行為先停下來
  e.preventDefault()
})
// --------------------------------

btnsearch.addEventListener("click", () => {
  // 參考答案沒注意到的地方--------------------
  // 缺少if函數去驅動如果輸入框不等於null""
  const currentValue = inputbox.value.trim()

  // input用value 且注意轉型.trim()
  if (currentValue !== "") {
    // --------------------------------

    const url =
      "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

    fetch(url)
      .then((resp) => {
        return resp.json()
      })
      .then((stantions) => {
        // 參考答案搜尋後list的列出 所需的宣告
        const bikeList = document.querySelector(".list")
        bikeList.innerHTML = ""
        //
        stantions
          .filter((stantion) => {
            return stantion.ar.includes(currentValue)
          })
          .forEach((station) => {
            const address = station.ar
            const bikes = station.available_rent_bikes
            const stopname = station.sna.replace("YouBike2.0_", "")
            // 參考答案因爲沒想法對於搜尋後list的列出---------------
            const item = `<li class="list">
                🚲 ${stopname} (${bikes})<br />
                <small class="">${address}</small>
              </li>`
            bikeList.insertAdjacentHTML("beforeend", item)
            // -----------------------------------------------------
            console.log(`(${bikes})${stopname}${address} `)
          })
          .catch((err) => {
            console.log(err)
          })
      })
  } else {
    list.innerHTML = "<p>*請輸入關鍵字 >< </p>"
  }
})
