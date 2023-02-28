export default function renderHTMLSearch(dataSearch) {

	const form = document.getElementById('header__logoandinput-input-form');
	const inputField = document.querySelector('.header__logoandinput-input-field');
	const sectionEventsAdd = document.querySelector('.main__sports-events');
	const searchWindow = document.querySelector('.main__search-window');
	form.addEventListener('submit', handleSearchInput);

	function handleSearchInput(event) {

		searchWindow.style.display = 'block'; 
		event.preventDefault();
		sectionEventsAdd.innerHTML = '';
		
		let inputCity = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);
		let inputArtist = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);
		let inputGenre = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);

		dataSearch.filter((event) => {
			
			if (event._embedded.venues[0].city.name === inputCity ||
				event.name === inputArtist	||
				event.classifications[0].genre.name === inputGenre) { 
			
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
								
								<h6>${event.dates.start.localDate}</h6>
						</span>
					</div>
				`
				sectionEventsAdd.appendChild(foundEvents); 
				event._embedded.venues[0].city.name === '';
			}
			
		});	
	}	
}