// JavaScript (app.js)
const movieNameRef = document.getElementById("movie-name");
const result = document.getElementById("result");
const  searchBtn = document.getElementById("search-btn");

const getMovie = (movieName) => {
  const API_KEY = "263d22d8";
  const url = `https://omdbapi.com/?s=${encodeURIComponent(movieName)}&page=1&apikey=${API_KEY}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
       updateUI(data)
    })
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
    });
};
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  const movieName = movieNameRef.value.trim();

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name Here...</h3>`;
  } else {
    getMovie(movieName);
  }
});

function updateUI (movies) {
  movies.Search.forEach((movie) => {
    console.log(movie)
    result.innerHTML += `
    <div class="card">
    <div class="info">
    <img src=${movie.Poster} class="poster">
    <div class="text">
     <h2>${movie.Title}</h2>
    <div>
    <a class="new-info", href="../movie.html?${movie.imdbID}">Read More</a></div>
    </div>
    </div>
    </div>
    `
  })
}

