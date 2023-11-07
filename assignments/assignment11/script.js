const getMovies = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    const movieSection = document.getElementById("movie");

    const movieData = await getMovies(
        "https://portiaportia.github.io/json/movies.json"
    );

    const movies = movieData;

    movies.forEach((movie) => {
        movieSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    const section = document.createElement("section");

    const img = document.createElement("img");
    img.src = movie.img;
    section.append(img);

    const textContainer = document.createElement("div");
    textContainer.classList.add("movie-text");

    const name = document.createElement("h1");
    name.innerHTML = movie.title;
    section.append(name);
    
    const director = document.createElement("p");
    director.innerHTML = "<strong>Director:</strong> " + "";
    section.append(director);
    
    const actors = document.createElement("p");
    actors.innerHTML = "<strong>Actors:</strong> " + "";
    section.append(actors);
    
    const year = document.createElement("p");
    year.innerHTML = "<strong>Year Released:</strong> " + "";
    section.append(year);
    
    const genres = document.createElement("p");
    genres.innerHTML = "<strong>Genres:</strong> " + "";
    section.append(genres);
    
    const description = document.createElement("p");
    description.innerHTML = movie.description;
    section.append(description);    

    section.classList.add("movie-style");
    return section;
};

window.onload = () => {
    showMovies();
};
