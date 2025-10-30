function aa() {
  console.log("AA");
}
function xyz() {
  //
}
// named export
export { aa, xyz };

// 或是在function前面加export
// export function xyz() {
//   //
// }

// export default
export default aa;
