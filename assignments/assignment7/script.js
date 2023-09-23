
const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const displayData = () => {
    const resultDiv = document.getElementById("oldest");
    const nameOne = document.getElementById("txt-name-one").value;
    const nameTwo = document.getElementById("txt-name-two").value;
    const nameThree = document.getElementById("txt-name-three").value;
    const ageOne = parseInt(document.getElementById("txt-age-one").value);
    const ageTwo = parseInt(document.getElementById("txt-age-two").value);
    const ageThree = parseInt(document.getElementById("txt-age-three").value);
    const error = document.getElementById("error");
    error.classList.add("hidden");
    resultDiv.classList.add("hidden");

    if(ageOne > ageTwo && ageOne > ageThree && ageTwo > ageThree){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameOne}, ${nameTwo}, ${nameThree}</section>`;
        resultDiv.classList.remove("hidden");
    } else if(ageOne > ageTwo && ageOne > ageThree && ageThree > ageTwo){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameOne}, ${nameThree}, ${nameTwo}</section>`;
        resultDiv.classList.remove("hidden");
    }else if(ageTwo > ageOne && ageTwo > ageThree && ageOne > ageThree){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameTwo}, ${nameOne}, ${nameThree}</section>`;
        resultDiv.classList.remove("hidden");
    }else if(ageTwo > ageOne && ageTwo > ageThree && ageThree > ageOne){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameTwo}, ${nameThree}, ${nameOne}</section>`;
        resultDiv.classList.remove("hidden");
    }else if(ageThree > ageOne && ageThree > ageTwo && ageOne > ageTwo){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameThree}, ${nameOne}, ${nameTwo}</section>`;
        resultDiv.classList.remove("hidden");
    }else if(ageThree > ageOne && ageThree > ageTwo && ageTwo > ageOne){
        resultDiv.innerHTML = `<section> The order of names from olderest you youngest is: ${nameThree}, ${nameTwo}, ${nameOne}</section>`;
        resultDiv.classList.remove("hidden");
    }else{
        error.classList.remove("hidden");
        error.innerHTML = "* Please make sure that every box is filled out and that no ages are the same!";
    }
}
    
const colorThermometer = () => {
    const funding = parseInt(document.getElementById("funding").value);
  
    const thermometerElement = document.getElementById("thermometer");
    thermometerElement.classList.remove("none", "quarter", "half", "quarters", "full");
    
    if (funding < 2500) {
        thermometerElement.classList.add("none");
    } else if (funding < 5000) {
        thermometerElement.classList.add("quarter");
    } else if (funding < 7500) {
        thermometerElement.classList.add("half");
    } else if (funding < 10000) {
        thermometerElement.classList.add("quarters");
    } else if (funding >= 10000) {
        thermometerElement.classList.add("full");
      }else {
        thermometerElement.classList.add("none");
    }
  };


  const exerciseOne = () => {
    const hideDivAge = document.getElementById("age-check");
    const hideDivFund = document.getElementById("fund-raising");
    hideDivFund.classList.add("hidden");
    hideDivAge.classList.remove("hidden");
  }

  const exerciseTwo = () => {
    const hideDivFund = document.getElementById("fund-raising");
    const hideDivAge = document.getElementById("age-check");
    hideDivAge.classList.add("hidden");
    hideDivFund.classList.remove("hidden");
  }
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-compare-ages").onclick = displayData;
    document.getElementById("button-gradient").onclick = colorThermometer;
    document.getElementById("button-exercise-one").onclick = exerciseOne;
    document.getElementById("button-exercise-two").onclick = exerciseTwo;
  };
  