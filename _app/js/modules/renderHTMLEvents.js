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
		newButton.className = 'main__events-events-like-button';
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
			openModalWindow(event);
		});

		function addedToWishlist() {
			addedEventToWishlist = !addedEventToWishlist;
		};

		newButton.addEventListener('click', hadndleClickLikeButton);
		function hadndleClickLikeButton(eventLike) {
			eventLike.stopPropagation();
			addedToWishlist();
			changeLikeButton();
			handleButtonAddToWishlist(event);
		}

		function changeLikeButton() {
			if(addedEventToWishlist === true) {
				newButton.classList.add('main__events-events-like-button--addedtowishlist');
			} else {
				newButton.classList.remove('main__events-events-like-button--addedtowishlist');
			}
		}
	
		sectionEvents.appendChild(newDiv);   
	});

	function openModalWindow(event) {

		if(modalWindow) {

			modalWindow.classList.add('main__modal-window--visible');
		}

		divModalWindowFirstSectionImageElement.src = `${event.images[2].url}`;
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
	}

	function handleCloseModalWindowEscape(event) {
		if (event.keyCode === 27)
		modalWindow.classList.remove('main__modal-window--visible');
	}

	function handleButtonAddToWishlist(event) {

		const wishlistItems = document.querySelector('.main__wishlist-items');
		const newDivWishlist = document.createElement('div');
		const newButtonWishlist = document.createElement('button');
		const newImageWishlist = document.createElement('img');
		const newTitleWishlist = document.createElement('h5');
		const newHFemWishlist = document.createElement('h6');

		if (addedEventToWishlist === true) {

			newDivWishlist.append(
				newButtonWishlist,
				newImageWishlist,
				newTitleWishlist,
				newHFemWishlist
			)

			newImageWishlist.src = `${event.images[2].url}`;
			newTitleWishlist.textContent = `${event.name}`;
			newHFemWishlist.textContent = `${event.dates.start.localDate}`;

			wishlistItems.appendChild(newDivWishlist);
		}	
		else {
			//wishlistItems.remove()
		}
	}
}   
