export default function Filter() {

	const filterButtons = document.querySelectorAll('.main__buttons_filter button'); 
	const apartments = document.querySelectorAll('.main__images div');
 
	for (const button of filterButtons) {
	
		button.addEventListener('click', (event) => {

			let filterData = event.target.dataset['filter'];

			for (const apartment of apartments) {
				if (!apartment.classList.contains(filterData)) {
					apartment.style.display = 'none';
				}
				else {
					apartment.style.display = 'block';
				}		
			}

			for (const button of filterButtons) {
				button.classList.remove('main__buttons_filter--filtered')
			}
			event.target.classList.add('main__buttons_filter--filtered')
		});
	}

	

	
}