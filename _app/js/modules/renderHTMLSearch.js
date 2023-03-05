export default function renderHTMLSearch(dataSearch) {

	const form = document.getElementById('header__logoandinput-input-form');
	const inputField = document.querySelector('.header__logoandinput-input-field');
	const sectionEventsAdd = document.querySelector('.main__search-window-element-events');
	const searchWindow = document.querySelector('.main__search-window-element');
	const mainSection = document.querySelector('body');

	form.addEventListener('submit', handleSearchInput);
	mainSection.addEventListener('click', handleCloseSearchWindow);
	window.addEventListener('keydown', handleKeyDown);

	function handleKeyDown(event) {
		if(event.keyCode === 27) {
			searchWindow.classList.remove('main__search-window--visible');
			mainSection.classList.remove('stop-scrolling');
		}
	}

	function handleCloseSearchWindow(event) {
		event.stopPropagation();
		searchWindow.classList.remove('main__search-window--visible');
		mainSection.classList.remove('stop-scrolling');
	}

	function handleSearchInput(event) {

		searchWindow.classList.add('main__search-window--visible');
		event.preventDefault();
		mainSection.classList.add('stop-scrolling');
		sectionEventsAdd.innerHTML = '';
		
		let input = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);

		dataSearch.filter((event) => {
			
			if (event._embedded.venues[0].city.name === input ||
				event.name === input	||
				event.classifications[0].genre.name === input) { 
			
				const foundEvents = document.createElement('div');     
				const newButton = document.createElement('button');
				newButton.className = 'main__search-window-like-button';
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