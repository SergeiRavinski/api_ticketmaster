export default function renderHTMLEvents(data, type) {

	let sectionEvents	= '';

	const searchButton = document.querySelector('.header__logoandinput-input-button');
	const search = document.querySelector('.header__logoandinput-input-field');
	const sectionEventsAdd = document.querySelector('.main__sports-events');
	searchButton.addEventListener('click', handleSearchInput);

	function handleSearchInput() {
		if(search.value ) {

		}
	}

	if(type === 'music') {
		sectionEvents = document.querySelector('.main__music-events');
	}

	else if (type === undefined) {
		sectionEvents = document.querySelector('.main__events-events');
	}

	data.forEach((event) => {
		 const newEvent = document.createElement('div');     
		 newEvent.innerHTML = `
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
		 sectionEvents.appendChild(newEvent);      
	});
}   
