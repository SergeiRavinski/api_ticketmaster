export default function renderHTMLEvents(data, type) {

	let sectionEvents	= '';

	if(type === 'music') {
		sectionEvents = document.querySelector('.main__music-events');
	}

	else if (type === undefined) {
		sectionEvents = document.querySelector('.main__events-events');
	}

	data.forEach((event) => {

		const newDiv = document.createElement('div');
		const newButton = document.createElement('button');
		const newLink = document.createElement('a');
		const newImg = document.createElement('img');
		const newSpan = document.createElement('span');
		const newHFive = document.createElement('h5');
		const newHSixFirst = document.createElement('h6');
		const newHSixSecond = document.createElement('h6');
	
		newImg.src = `${event.images[3].url}`;
		newLink.href = `${event.url}`;
		newHFive.textContent = `${event.name}`;
		newHSixFirst.textContent = `${event._embedded.venues[0].city.name}`;
		newHSixSecond.textContent = `${event.dates.start.localDate}`;

		newDiv.append(
			newButton,
			newLink,
			newSpan
		);

		newLink.append(newImg);

		newSpan.append(
			newHFive,
			newHSixFirst,
			newHSixSecond
		);

		sectionEvents.appendChild(newDiv);      
	});
}   
