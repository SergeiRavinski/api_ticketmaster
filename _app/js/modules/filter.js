export default function Filter() {

	const myFilterButtonBergen = document.querySelector('.main__buttons_filter-bergen');
	myFilterButtonBergen.addEventListener('click', handleFilterBergen);
	function handleFilterBergen(data) {

		const sectionEvents = document.querySelector('.main__events');
		data._embedded.events.filter((event) => {

			if (data._embedded.events._embedded.venues[0].city === 'Bergen') {
					const newEventBergen = document.createElement('div');     
					newEventBergen.innerHTML = `
						<div class="main__images-filter-aalesund main__images-filter-all">
							<button></button>
							<a href="${event.url}">
									<img src="${event.images[9].url}" alt="">
							</a>
							<span>
									<h5>${event.name}</h5>
									<h6>${event._embedded.venues[0].city.name}</h6>
									<h6>Pris fra ${event.priceRanges[0].min} ${event.priceRanges[0].currency}</h6>
									<h6>${event.dates.start.localDate}</h6>
							</span>
						</div>
					`;
					sectionEvents.appendChild(newEventBergen);
			} 
		});   
	}   
}