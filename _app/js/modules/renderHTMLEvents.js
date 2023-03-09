import { t_map } from "../env.js";

export default function renderHTMLEvents(data, type) {

	let sectionEvents	= '';
	let modalWindow = document.querySelector('.main__modal-window');
	let addedEventToWishlist = false;
	const divModalWindowFirstSectionImageElement = document.querySelector('.main__modal-window-card-first-section-image img');
	const divModalWindowFirstSectionInfoHFive = document.querySelector('.main__modal-window-card-first-section-info h5');
	const divModalWindowFirstSectionInfoHSixFirst = document.querySelector('.main__modal-window-card-first-section-info h6');
	const divModalWindowFirstSectionInfoHSixSecond = document.querySelector('.main__modal-window-card-first-section-info h6');
	const divModalWindowFirstSectionButtonClose = document.querySelector('.main__modal-window-card-button-close');
	const divModalWindowSecondSectionSpanHFive = document.querySelector('.main__modal-window-card-second-section-address h5');
	const divModalWindowSecondSectionSpanHSix = document.querySelector('.main__modal-window-card-second-section-address h6');
	const divModalWindowSecondSectionLinkBuy = document.querySelector('.main__modal-window-card-button-buy');
	const body = document.querySelector('body');

	divModalWindowFirstSectionButtonClose.addEventListener('click', handleCloseModalWindow);
	window.addEventListener('keydown', handleCloseModalWindowEscape);

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

		newButton.className = 'main__events-events-like-button';

		event.images.forEach((image) => {
			if (image.width >= 500 && image.width <= 800) {
				newImg.src = `${image.url}`;
			}
		});
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
			openModalWindow(event);
		});

		function addedToWishlist() {
			addedEventToWishlist = !addedEventToWishlist;
		};

		newButton.addEventListener('click', hadndleClickLikeButton);
		function hadndleClickLikeButton(eventLike) {
			eventLike.stopPropagation();
			addedToWishlist();
			handleButtonAddToWishlist(event);
		}

		//wishlist
		function handleButtonAddToWishlist(event) {

			const id = 'ID';
			let storedEvents = JSON.stringify(event.id);
			let parsedEvent = JSON.parse(storedEvents);
			
			if (event) {	
				
				let addedEvents = [];
				addedEvents.push(event.id);

				let newEvent = window.localStorage.setItem(id, addedEvents);
				window.localStorage.getItem(newEvent);
				
				newButton.classList.add('main__events-events-like-button--addedtowishlist');
				
				//storeEvents();
				//let wishlistItems = document.querySelector('.main__wishlist-items');
				//const newDivWishlist = document.createElement('div');
				//const newButtonWishlist = document.createElement('button');
				//const newImageWishlist = document.createElement('img');
				//const newTitleWishlist = document.createElement('h5');
				//const newHFemWishlist = document.createElement('h6');
		
				//newDivWishlist.append(
				//	newButtonWishlist,
				//	newImageWishlist,
				//	newTitleWishlist,
				//	newHFemWishlist
				//)

				//event.images.forEach((image) => {
				//	if (image.width >= 500 && image.width <= 800) {
				//		newImageWishlist.src = `${image.url}`;
				//	}
				//});
				//newTitleWishlist.textContent = `${event.name}`;
				//newHFemWishlist.textContent = `${event.dates.start.localDate}`;

				//wishlistItems.appendChild(newDivWishlist);
			}

			else {
				newButton.classList.remove('main__events-events-like-button--addedtowishlist');
				window.localStorage.clear(parsedEvent);
			}
		}
	
		sectionEvents.appendChild(newDiv);  
	});
	
	//Modal window
	function openModalWindow(event) {
	
		if(modalWindow) {

			modalWindow.classList.add('main__modal-window--visible');
			body.classList.add('stop-scrolling');
		}

		event.images.forEach((image) => {
			if (image.width >= 500 && image.width <= 800) {
				divModalWindowFirstSectionImageElement.src = `${image.url}`;
			}
		});
		divModalWindowFirstSectionInfoHFive.textContent = `${event.name}`;
		divModalWindowFirstSectionInfoHSixFirst.textContent = `Date: ${event.dates.start.localDate}`;
		divModalWindowFirstSectionInfoHSixSecond.textContent = `Price: ${event.priceRanges[0].min} NOK - ${event.priceRanges[0].max} NOK`;
		divModalWindowSecondSectionSpanHFive.textContent = `Venue: ${event._embedded.venues[0].name}`;
		divModalWindowSecondSectionSpanHSix.textContent = `Address: ${event._embedded.venues[0].address.line1}`;
		divModalWindowSecondSectionLinkBuy.href = `${event.url}`;

		//mapbox
		const center = [`${event._embedded.venues[0].location.longitude}`, `${event._embedded.venues[0].location.latitude}`];
		mapboxgl.accessToken = t_map;
		
		const map = new mapboxgl.Map({
			container: 'main__modal-window-card-second-section-image', 
			style: 'mapbox://styles/mapbox/streets-v12',
			center: center,
			zoom: 10,
		});

		const markerElement = document.createElement('div');
		markerElement.classList.add('marker');

		new mapboxgl.Marker(markerElement)
			.setLngLat(center)
			.addTo(map);

		markerElement.addEventListener('click', () => {
			map.flyTo({
				center: center,
				essential: true,
				zoom: 14,
			});
		});

		map.addControl(new mapboxgl.FullscreenControl());
		map.addControl(new mapboxgl.NavigationControl());
	}

	function handleCloseModalWindow() {
		modalWindow.classList.remove('main__modal-window--visible');
		body.classList.remove('stop-scrolling');
	}

	function handleCloseModalWindowEscape(event) {
		if (event.keyCode === 27)
		modalWindow.classList.remove('main__modal-window--visible');
		body.classList.remove('stop-scrolling');
	}
}   
