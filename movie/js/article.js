const query = window.location.search
const url = `https://www.omdbapi.com/?i=${query.slice(1)}&apikey=263d22d8`
const infoMovie = document.getElementById('info-movie')

function updateUi(data) {
    console.log(data);
    
}

fetch(url)
    .then(data => {
        return data.json()
    })
    .then((data) => {
        updateUI(data)
    })
    .catch((error) => {
        console.log(error)
    })

    function updateUI(movie) {
        console.log(movie)
        infoMovie.innerHTML = `
        <div class="info">
            <img src=${movie.Poster} class="poster">
            <div>
                <h2>${movie.Title}</h2>
                <div class="rating">
                    <h4 class="star">
                    ⭐ ${movie.imdbRating}</h4>
                </div>
                <div class="details">
                    <span>${movie.Type}</span>
                    <span>${movie.Year}</span>
                    <span>${movie.Runtime}</span>
                </div>
                <div class="genre">
                </div>
            </div>
        </div>
        <h3>Plot:</h3>
        <p>${movie.Plot}</p>
        <h3>Cast:</h3>
        <p>${movie.Actors}</p>
        <a class="new-info" href="index.html">Return</a>
        </div>
`  
    }
    