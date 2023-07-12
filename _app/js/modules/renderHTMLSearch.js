export default function renderHTMLSearch(dataSearch) {

	let inputField = document.querySelector('.header__logoandinput-input-field');
	const form = document.getElementById('header__logoandinput-input-form');
	const sectionEventsAdd = document.querySelector('.main__search-window-element-events');
	const searchWindow = document.querySelector('.main__search-window-element');
	const mainSection = document.querySelector('body');

	form.addEventListener('submit', handleSearchInput);
	mainSection.addEventListener('click', handleCloseSearchWindow);
	window.addEventListener('keydown', handleKeyDown);

	function handleKeyDown(event) {
		if (event.keyCode === 27) {
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
		
		let input = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);

		searchWindow.classList.add('main__search-window--visible');
		event.preventDefault();
		mainSection.classList.add('stop-scrolling');
		sectionEventsAdd.innerHTML = '';
		
		dataSearch.filter((event) => {

			let cityFilter = event._embedded.venues[0].city.name;
			let nameFilter = event.name;
			let genreFilter = event.classifications[0].genre.name;
			
			if (cityFilter === input ||
				nameFilter === input	||
				genreFilter === input) { 
			
				const foundEvents = document.createElement('div');     
				const newButton = document.createElement('button');
				const newLink = document.createElement('a');
				const newImg = document.createElement('img');
				const newSpan = document.createElement('span');
				const newHFive = document.createElement('h5');
				const newHSixFirst = document.createElement('h6');
				const newHSixSecond = document.createElement('h6');

				newButton.className = 'main__search-window-like-button';
			
				event.images.forEach((image) => {
					if (image.width >= 400 && image.width <= 800) {
						newImg.src = `${image.url}`;
					}
				});
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
			}	
			inputField.value = '';
		});	
	}	
}