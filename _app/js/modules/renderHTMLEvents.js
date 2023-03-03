export default function renderHTMLEvents(data, type) {


	const modalWindow = document.querySelector('.main__modal-window');

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
		//newLink.href = `${event.url}`;
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

		newLink.addEventListener('click', () => {
			openModalWindow(event)
		});

		sectionEvents.appendChild(newDiv);   
	});

	function openModalWindow(event) {

		if(modalWindow) {
			modalWindow.classList.add('main__modal-window--visible');
		}		

		modalWindow.innerHTML = `
			<div class="main__modal-window-card">
				<div class="main__modal-window-card-first-section">
					<div class="main__modal-window-card-first-section-image">
						<img src="${event.images[3].url}" alt="image">
					</div>
					<div class="main__modal-window-card-first-section-info">
						<h5>${event.name}</h5>
						<h6>Date: ${event.dates.start.localDate}</h6>
						<h6>Price: ${event.priceRanges[0].min} NOK - ${event.priceRanges[0].max} NOK</h6>
					</div>
				</div>
				<button id="main__modal-window-card-button-close">
					<img src="./_app/assets/icons/close_modal_window.svg" alt="">
				</button>
				<div class="main__modal-window-card-second-section">
					<span class="main__modal-window-card-second-section-address">
						<h5>Venue: ${event._embedded.venues[0].name}</h5>
						<h6>Address: ${event._embedded.venues[0].address.line1}</h6>
					</span>
					<div class="main__modal-window-card-second-section-image">
						<img src="./_app/assets/images/map.jpeg" alt="map">
					</div>	
				</div>
				<button class="main__modal-window-card-button-buy">Buy tickets</button>
			</div>
		`
		const buttonCloseModalWindow = document.getElementById('main__modal-window-card-button-close');
		buttonCloseModalWindow.addEventListener('click', handleCloseModalWindow);
	}

	function handleCloseModalWindow() {
		modalWindow.classList.remove('main__modal-window--visible');
	}

	window.addEventListener('keydown', handleCloseModalWindowEscape);

	function handleCloseModalWindowEscape(event) {
		if (event.keyCode === 27)
		modalWindow.classList.remove('main__modal-window--visible');
	}
}   
