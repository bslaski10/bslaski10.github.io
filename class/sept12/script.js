const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi";
    helloP.classList.add("special");
}

const showGhost = () => {
    document.getElementById("ghost").classList.remove("hide");
}

const hideGhost = () => {
    document.getElementById("ghost").classList.add("hide");
}


window.onload = () => {
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showGhost;
    document.getElementById("button-hide").onclick = hideGhost;
}

