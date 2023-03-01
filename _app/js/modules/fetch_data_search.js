export const fetchDataSearch = async () => {
	
	const currentEventsSearch = 200;
	const rootUrlSearch = `https://app.ticketmaster.com/discovery/v2`;
	const endpointSearch = `${rootUrlSearch}/events?&apikey=${apiKey}&size=${currentEventsSearch}&countryCode=no`;
	
	let responseSearch = '';
	responseSearch = await fetch(endpointSearch);
	
	try {
		 const resultSearch = await responseSearch.json();
		 const eventsSearch = resultSearch._embedded.events;
		 return eventsSearch;
	} catch (error) {
		 handleError(error);   
	}
}

import { apiKey } from '../env.js';
