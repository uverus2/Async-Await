"use strict";

// Post Array
const posts = [{
  title: "Post One",
  body: "This is post one"
}, {
  title: "Post Two",
  body: "This is post two"
}]; // the function mimic server behaviour
// this function runs quicker 

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += "<li>".concat(post.title, "</li>");
    });
    document.body.innerHTML = output;
  }, 1000);
} // function runs slower 
// Callback is added so it makes the quicker function run inside the slower function or after the content needed is added


function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error it went wrong");
      }
    }, 2000);
  });
} // createPost({title:"post 3",body: "This is post three"})
//     .then(getPosts)
//     .catch(error => console.log(error))
// Async / Await
// async function init() {
//     await createPost({title:"post 3", body: "This is post three"});
//     getPosts();
// }
// init();
// Async / Await with Fetch


async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchData();
let body = "";

function one(hey) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      body = hey;

      if (body !== undefined && body.length >= 1) {
        resolve();
      } else {
        reject("Error no value");
      }
    }, 1000);
  });
}

function two() {
  if (body !== undefined && body.length >= 1) {
    console.log("sucess");
    console.log(body);
  } else {
    console.log("error");
  }
}

one("Hey Ho").then(two).catch(err => console.log(err));

async function promise() {
  await one("Hey");
  two();
}

promise(); //Promise all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,2000, "goodbye");
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
// Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values))