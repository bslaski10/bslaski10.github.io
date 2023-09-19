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
