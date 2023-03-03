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
	
		newImg.src = `${event.images[2].url}`;
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
		//console.log(event)

		const newDivModalWindow = document.createElement('div');
		newDivModalWindow.className = 'main__modal-window-card';

		const newDivModalWindowFirstSection = document.createElement('div');
		newDivModalWindowFirstSection.className = 'main__modal-window-card-first-section';

		const newDivModalWindowFirstSectionImage = document.createElement('div');
		newDivModalWindowFirstSectionImage.className = 'main__modal-window-card-first-section-image';

		const newDivModalWindowFirstSectionImageElement = document.createElement('img');
		newDivModalWindowFirstSectionImageElement.src = `${event.images[2].url}`;
		const newDivModalWindowFirstSectionInfo = document.createElement('span');
		newDivModalWindowFirstSectionInfo.className = 'main__modal-window-card-first-section-info';

		const newDivModalWindowFirstSectionInfoHFive = document.createElement('h5');
		newDivModalWindowFirstSectionInfoHFive.innerText = `${event.name}`;
		const newDivModalWindowFirstSectionInfoHSixFirst = document.createElement('h6');
		newDivModalWindowFirstSectionInfoHSixFirst.innerText = `Date: ${event.dates.start.localDate}`;
		const newDivModalWindowFirstSectionInfoHSixSecond = document.createElement('h6');
		newDivModalWindowFirstSectionInfoHSixSecond.innerText = `Price: ${event.priceRanges[0].min} - ${event.priceRanges[0].max} NOK`;
		const newDivModalWindowFirstSectionButtonClose = document.createElement('button');
		newDivModalWindowFirstSectionButtonClose.className = 'main__modal-window-card-button-close';

		const newDivModalWindowFirstSectionButtonCloseIcon = document.createElement('img');
		newDivModalWindowFirstSectionButtonCloseIcon.src = './_app/assets/icons/close_modal_window.svg';
		const newDivModalWindowSecondSection = document.createElement('div');
		newDivModalWindowSecondSection.className = 'main__modal-window-card-second-section';

		const newDivModalWindowSecondSectionSpan = document.createElement('span');
		newDivModalWindowSecondSectionSpan.className = 'main__modal-window-card-second-section-address';

		const newDivModalWindowSecondSectionSpanHFive = document.createElement('h5');
		newDivModalWindowSecondSectionSpanHFive.innerText = `Venue: ${event._embedded.venues[0].name}`;
		const newDivModalWindowSecondSectionSpanHSix = document.createElement('h6');
		newDivModalWindowSecondSectionSpanHSix.innerText = `Address: ${event._embedded.venues[0].address.line1}`;
		const newDivModalWindowSecondSectionImage = document.createElement('div');
		newDivModalWindowSecondSectionImage.className = 'main__modal-window-card-second-section-image';

		const newDivModalWindowSecondSectionImageElement = document.createElement('img');
		newDivModalWindowSecondSectionImageElement.src = './_app/assets/images/map.jpeg';
		const newDivModalWindowSecondSectionLinkBuy = document.createElement('a');
		newDivModalWindowSecondSectionLinkBuy.href = `${event.url}`;
		newDivModalWindowSecondSectionLinkBuy.className = 'main__modal-window-card-button-buy';

		const newDivModalWindowSecondSectionButton = document.createElement('button');
		newDivModalWindowSecondSectionButton.innerText = 'Buy tickets';

		newDivModalWindow.append(
			newDivModalWindowFirstSection,
			newDivModalWindowFirstSectionButtonClose,
			newDivModalWindowSecondSection,
			newDivModalWindowSecondSectionLinkBuy
		)

		newDivModalWindowFirstSection.append(
			newDivModalWindowFirstSectionImage,
			newDivModalWindowFirstSectionInfo,
		)

		newDivModalWindowFirstSectionImage.appendChild(newDivModalWindowFirstSectionImageElement);
		newDivModalWindowFirstSectionInfo.append(
			newDivModalWindowFirstSectionInfoHFive,
			newDivModalWindowFirstSectionInfoHSixFirst,
			newDivModalWindowFirstSectionInfoHSixSecond
		)

		newDivModalWindowFirstSectionButtonClose.appendChild(newDivModalWindowFirstSectionButtonCloseIcon);

		newDivModalWindowSecondSection.append(
			newDivModalWindowSecondSectionSpan,
			newDivModalWindowSecondSectionImage
		)

		newDivModalWindowSecondSectionSpan.append(
			newDivModalWindowSecondSectionSpanHFive,
			newDivModalWindowSecondSectionSpanHSix
		)

		newDivModalWindowSecondSectionImage.appendChild(newDivModalWindowSecondSectionImageElement);
		newDivModalWindowSecondSectionLinkBuy.appendChild(newDivModalWindowSecondSectionButton);	

		modalWindow.appendChild(newDivModalWindow);
		

		//modalWindow.innerHTML = `
		//	<div class="main__modal-window-card">
		//		<div class="main__modal-window-card-first-section">
		//			<div class="main__modal-window-card-first-section-image">
		//				<img src="${event.images[2].url}" alt="image">
		//			</div>
		//			<span class="main__modal-window-card-first-section-info">
		//				<h5>${event.name}</h5>
		//				<h6>Date: ${event.dates.start.localDate}</h6>
		//				<h6>Price: ${event.priceRanges[0].min} NOK - ${event.priceRanges[0].max} NOK</h6>
		//			</span>
		//		</div>
		//		<button class="main__modal-window-card-button-close">
		//			<img src="./_app/assets/icons/close_modal_window.svg" alt="">
		//		</button>

		//		<div class="main__modal-window-card-second-section">
		//			<span class="main__modal-window-card-second-section-address">
		//				<h5>Venue: ${event._embedded.venues[0].name}</h5>
		//				<h6>Address: ${event._embedded.venues[0].address.line1}</h6>
		//			</span>
		//			<div class="main__modal-window-card-second-section-image">
		//				<img src="./_app/assets/images/map.jpeg" alt="map">
		//			</div>	
		//		</div>
		//		<a class="main__modal-window-card-button-buy" href="${event.url}">
		//			<button>Buy tickets</button>
		//		</a>
		//	</div>
		//`
		newDivModalWindowFirstSectionButtonClose.addEventListener('click', handleCloseModalWindow);
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
