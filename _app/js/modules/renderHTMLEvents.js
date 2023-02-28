export default function renderHTMLEvents(data, type) {

	let sectionEvents	= '';

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
						 
						 <h6>${event.dates.start.localDate}</h6>
					</span>
			  </div>
		 `
		 sectionEvents.appendChild(newEvent);      
	});
}   
