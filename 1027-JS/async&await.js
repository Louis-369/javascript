const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

try {
  const resp = await fetch(url);
  const stations = await resp.json();
  console.log(stations);
} catch (err) {
  console.log(err);
}
// axios.get(url).then((resp) => {
//   const data =resp.data
const { data } = resp;
console.log(data);
// });

// ------------------------------------------------------------
// 匯入
import { aa, xyz } from "./aa.js";
// 也可以import aa from "./aa.js";
console.log(aa);
console.log(xyz);
