export const fetchDataSearch = async () => {
	const apiKeySearch = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j';
	const currentEventsSearch = 200;
	const rootUrlSearch = `https://app.ticketmaster.com/discovery/v2`;
	const endpointSearch = `${rootUrlSearch}/events?&apikey=${apiKeySearch}&size=${currentEventsSearch}&countryCode=no&city=oslo`;
	
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
