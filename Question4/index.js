
let arr = [1, 2, 3, 4, 5, "xyz"];
if (arr.indexOf("xyz") >= 0) {
  arr.push("OneItemAdded");
  document.write("array:" + arr + "<br>");
} else {
  document.write("xyz is not exist");
}
