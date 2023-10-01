const colorThermometer = () => {
    const funding = parseInt(document.getElementById("funding").value);
    const maxHeight = 10000;

   
    if (!isNaN(funding)) {
        const fillHeight = (funding / maxHeight) * 100;
        
        if(funding > 10000){
            document.getElementById("fill").style.height = `${100}%`; //googled how to get string that represents precentage value
        } 
        else{
        document.getElementById("fill").style.height = `${fillHeight}%`;
        }
    }
};



const runningMan = () => {
    const runningImage = document.getElementById("runningMan");
    const walkingImage = document.getElementById("walkingMan");

    const currentLeft = parseInt(getComputedStyle(runningImage).getPropertyValue("--imageLeft")) || 0;
    const newLeft = currentLeft + 50;

    if (newLeft !== 0) {
        walkingImage.style.setProperty("--imageLeft", "0px");
        runningImage.style.display = "block";
    } else {
        walkingImage.style.setProperty("--imageLeft", "50px");
        runningImage.style.display = "none";
    }

    runningImage.style.setProperty("--imageLeft", newLeft + "px");
}

window.onload = () => {
    document.getElementById("button-gradient").onclick = colorThermometer;
    document.getElementById("runningMan").onclick = runningMan;
    document.getElementById("walkingMan").onclick = runningMan;
};


