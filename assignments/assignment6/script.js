const showGhost = () => {
    document.getElementById("ghost").classList.remove("hide");
}

const hideGhost = () => {
    document.getElementById("ghost").classList.add("hide");
}


const begin = () =>{
    document.getElementById("heart").classList.add("anim-heart");
}


const addComment = () => {
    const productName = document.getElementById("txt-product-name").value;
    const messageA = document.getElementById("product");
    const rating = document.getElementById("txt-rating").value;
    const messageB = document.getElementById("rating");
    const comment = document.getElementById("txt-comment").value;
    const messageC = document.getElementById("comment");
    const name = document.getElementById("txt-user-name").value;
    const messageD = document.getElementById("name");
   
    messageA.innerHTML =  productName;
    messageB.innerHTML =  rating + "/5 stars";
    messageC.innerHTML =  comment;
    messageD.innerHTML =  "by " + name;
};

window.onload = () =>{
    document.getElementById("show").onclick = showGhost;
    document.getElementById("hide").onclick = hideGhost;

    document.getElementById("dance").onclick = begin;

    document.getElementById("add-comment").onclick = addComment;
}


// const add = (a,b) => a+b;


// const add = (a,b) => {return a+b;}

// console.log(add(5,6));


// const square = (a) => a*a;

// console.log(square(5));


// const hello = () => console.log("Hello me!");

// hello();


// const helloSpecific = (userName) => console.log("Hello " + userName + "!");

// helloSpecific("Brooks");


// const helloFullName = (firstName, lastName) => {
//     console.log("Hello " + firstName + " " + lastName);
//     console.log("You are awesome!")
// }

// helloFullName("Brooks", "Slaski");

// const begin = () =>{
//     document.getElementById("square").classList.add("anim-square");
// }



// const displayName = () => {
//     const firstName = document.getElementById("txt-first-name").value;
//     console.log("Hello " + firstName + "!");
// }

// window.onload = () =>{
//     document.getElementById("button-begin").onclick = begin;
//     document.getElementById("button-show-name").onclick = displayName;
// }