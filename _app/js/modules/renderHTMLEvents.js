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
		const newDiv = document.createElement('div');
		const newButton = document.createElement('button');
		const newLink = document.createElement('a');
		const newImg = document.createElement('img');
		const newSpan = document.createElement('span');
		const newHFive = document.createElement('h5');
		const newHSixFirst = document.createElement('h5');
		const newHSixSecond = document.createElement('h5');

		newEvent.appendChild(newDiv).appendChild(newButton);


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
