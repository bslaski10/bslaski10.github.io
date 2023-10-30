const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };
  
  const submitRating = (e) => {
    e.preventDefault();
    document.getElementById("success").classList.remove("hidden");
  
    const form = document.getElementById("form-rating");
    const opponent = form.elements["txt-opponent"].value;
    const location = form.elements["txt-location"].value;
    const date = form.elements["txt-date"].value;
    const rating = form.elements["txt-rating"].value;
    const description = form.elements["txt-description"].value;
  
    const ratingElement = document.createElement("div");
    ratingElement.classList.add("rectangle");
  
    ratingElement.innerHTML = `
      <div class="text-container">
        <div class="first">
          <p>South Carolina vs ${opponent}</p>
        </div>
        <div class="second">
          <p>${date}</p>
        </div>
        <div class="third">
          <p>${location}</p>
        </div>
        <div class="fourth">
          <p>${rating}/10 Rating</p>
        </div>
        <div class="fifth">
          <p>Description: ${description}</p>
        </div>
      </div>
    `;
  
    const resultSection = document.getElementById("results");
    resultSection.appendChild(ratingElement);
  
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("form-rating").onsubmit = submitRating;
  
    fetch("https://bslaski10.github.io/projects/part5/ratings.json")
      .then((response) => response.json())
      .then((data) => {
        const ratings = data.ratings;
        const resultSection = document.getElementById("results");
  
        ratings.forEach((ratingData) => {
          const ratingElement = document.createElement("div");
          ratingElement.classList.add("rectangle");
  
          ratingElement.innerHTML = `
            <div class="text-container">
              <div class="first">
                <p>South Carolina vs ${ratingData.opponent}</p>
              </div>
              <div class="second">
                <p>${ratingData.date}</p>
              </div>
              <div class="third">
                <p>${ratingData.location}</p>
              </div>
              <div class="fourth">
                <p>${ratingData.rating}/10 Rating</p>
              </div>
              <div class="fifth">
                <p>Description: ${ratingData.description}</p>
              </div>
            </div>
          `;
  
          resultSection.appendChild(ratingElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching and displaying ratings:", error);
      });
  };
  