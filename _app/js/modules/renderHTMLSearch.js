export default function renderHTMLSearch(dataSearch) {

	const searchButton = document.querySelector('.header__logoandinput-input-button');
	const search = document.querySelector('.header__logoandinput-input-field');
	const sectionEventsAdd = document.querySelector('.main__sports-events');
	searchButton.addEventListener('click', handleSearchInput);

	function handleSearchInput() {
		dataSearch.filter((event) => {

			if (search.value) {
				
				const foundEvents = document.createElement('div');     
				foundEvents.innerHTML = `
					<div>
						<button></button>
						<a href="${event.url}">
								<img src="${event.images[3].url}" alt="">
						</a>
						<span>
								<h5>${event.name}</h5>
								<h6>${event._embedded.venues[0].city.name}</h6>
								<h6>Pris fra ${event.priceRanges[0].min} ${event.priceRanges[0].currency}</h6>
								<h6>${event.dates.start.localDate}</h6>
						</span>
					</div>
				`
				sectionEventsAdd.appendChild(foundEvents); 
				//search.value = '';
			}  
	  });
	}
}


//const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
//const API_URL_POPULAR =
//  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
//const API_URL_SEARCH =
//  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

//getMovies(API_URL_POPULAR);

//async function getMovies(url) {
//  const resp = await fetch(url, {
//    headers: {
//      "Content-Type": "application/json",
//      "X-API-KEY": API_KEY,
//    },
//  });
//  const respData = await resp.json();
//  showMovies(respData);
//}


//function showMovies(data) {
//  const moviesEl = document.querySelector(".movies");

//  // Очищаем предыдущие фильмы
//  document.querySelector(".movies").innerHTML = "";

//  data.films.forEach((movie) => {
//    const movieEl = document.createElement("div");
//    movieEl.classList.add("movie");
//    movieEl.innerHTML = `
//        <div class="movie__cover-inner">
//        <img
//          src="${movie.posterUrlPreview}"
//          class="movie__cover"
//          alt="${movie.nameRu}"
//        />
//        <div class="movie__cover--darkened"></div>
//      </div>
//      <div class="movie__info">
//        <div class="movie__title">${movie.nameRu}</div>
//        <div class="movie__category">${movie.genres.map(
//          (genre) => ` ${genre.genre}`
//        )}</div>
//        ${
//          movie.rating &&
//          `
//        <div class="movie__average movie__average--${getClassByRate(
//          movie.rating
//        )}">${movie.rating}</div>
//        `
//        }
//      </div>
//        `;
//    moviesEl.appendChild(movieEl);
//  });
//}

//const form = document.querySelector("form");
//const search = document.querySelector(".header__search");

//form.addEventListener("submit", (e) => {
//  e.preventDefault();

//  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
//  if (search.value) {
//    getMovies(apiSearchUrl);

//    search.value = "";
//  }
//});