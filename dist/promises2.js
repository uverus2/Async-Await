"use strict";

var hey = "";
const promise1 = new Promise((resolve, reject) => {
  document.getElementById("messageClick").addEventListener("click", e => {
    e.preventDefault();
    var input = document.querySelector("#message").value;
    console.log(input);
    resolve(input);
  });
});
var promise = new Promise((resolve, reject) => {
  document.getElementById("hey").addEventListener("click", () => {
    if (hey.length > 0) {
      resolve(hey);
    } else {
      reject("Add something");
    }
  });
});
promise1.then(data => {
  hey += data;
});
promise.then(data => {
  document.getElementById("results").innerHTML = data;
}).catch(error => alert(error)); // var hey = "";
// document.getElementById("messageClick").addEventListener("click", e => {
//     e.preventDefault();
//     var input = document.querySelector("#message").value;
//     console.log(typeof input);
//     return hey += input
// });
//     document.getElementById("hey").addEventListener("click", () => {
//         if (hey.length > 0 ){
//             document.getElementById("results").innerHTML = hey
//         }
//         else {
//             console.log("No")
//         }
//     });