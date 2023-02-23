export const fetchDataSearch = async () => {
	const apiKeySearch = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
	const currentEvents = 200;
	const rootUrl = `https://app.ticketmaster.com/discovery/v2`;
	const endpointSearch = `${rootUrl}/events?&apikey=${apiKeySearch}&size=${currentEvents}&countryCode=no&city=`;

	let responseSearch = '';
	responseSearch = await fetch(endpointSearch);
	try {
		 const resultSearch = await responseSearch.json();
		 const { eventsSearch } = resultSearch._embedded;
		 return eventsSearch;
	} catch (error) {
		 handleError(error);   
	}
}


function handleError(error) {

}