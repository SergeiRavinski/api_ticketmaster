export default function renderHTMLSearch(dataSearch) {

	const form = document.getElementById('header__logoandinput-input-form');
	const inputField = document.querySelector('.header__logoandinput-input-field');
	const sectionEventsAdd = document.querySelector('.main__sports-events');
	const searchWindow = document.querySelector('.main__search-window');
	const bodySearch = document.querySelector('html');

	form.addEventListener('submit', handleSearchInput);
	bodySearch.addEventListener('click', handleCloseSearchWindow);

	function handleCloseSearchWindow() {
		searchWindow.classList.remove('main__search-window--visible');
	}

	function handleSearchInput(event) {

		searchWindow.classList.add('main__search-window--visible');
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
		
				foundEvents.append(
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

				sectionEventsAdd.appendChild(foundEvents); 
				event._embedded.venues[0].city.name === '';
			}	
		});	
	}	
}