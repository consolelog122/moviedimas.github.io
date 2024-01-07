let dataFilm = [];

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=757b424779c96f56e9e49e9012012b7e"
)
  .then((data) => {
    return data.json();
  })
  .then((movie) => {
    console.log(movie);
    dataFilm = movie;

    console.log("jumlah data film : " + dataFilm.results.length);
    dataFilm.results.forEach((element) => {
      displayFilm(element);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// random
// random

// display all movie
function displayFilm(movie) {
  const containerFilm = document.querySelector("section.container-film");

  containerFilm.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card" style="width: 18rem;">
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.overview}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Popularity : ${movie.popularity}</li>
    <li class="list-group-item">Rate : ${movie.vote_average}</li>
    <li class="list-group-item">Release Date : ${movie.release_date}</li>
    </ul>
</div>
  `
  );
}
// display all movie

// search
const searchBtn = document.getElementsByClassName("btn-outline-success")[0];
searchBtn.addEventListener("click", () => {
  filterFilm();
});

function filterFilm() {
  const searchInput = document.getElementById("inputSearch").value;

  dataFilm.results.filter((m) => {
    if (m.title.toLowerCase().includes(searchInput.toLowerCase())) {
      displayFilm(m);
    }
  });
}
// search

// home
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.reload();
});
// home
