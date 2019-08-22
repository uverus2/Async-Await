
// Post Array
const posts = [
    {
        title: "Post One", 
        body: "This is post one"
    },
    {
        title: "Post Two", 
        body: "This is post two"
    }
];

// the function mimic server behaviour

// this function runs quicker 
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function runs slower 
// Callback is added so it makes the quicker function run inside the slower function or after the content needed is added
function createPost (post, callback){
    setTimeout(() => {
        posts.push(post)
        callback();
    },2000);
}


createPost({title:"post 3",body: "This is post three"},getPosts);