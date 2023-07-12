import { apiKey } from '../env.js';

export default async function fetchDataSearch() {

	const baseUrl = `https://app.ticketmaster.com/discovery/v2`;
	const locale = '*';
	const countryCode = 'no';
	const currentEvents = 200;
	const sort = 'date,asc';
	const warningElement = document.querySelector('.main__error');
	const options = {
		 method: "GET",
	}
	const endpoint = `${baseUrl}/events?&apikey=${apiKey}&locale=${locale}&countryCode=${countryCode}&size=${currentEvents}&sort=${sort}`;
	const response = await fetch(endpoint, options);

	try {
		 if (response.ok) {
			  const result = await response.json();
			  const { events } = result._embedded;
			  return events;
		 } else if (response.status === 404) {
			  throw new Error('Url not existing');
		 } else if (response.status === 401) {
			  throw new Error('Not authorized user');
		 } else if (response.status >= 500) {
			  throw new Error('Server not responding');
		 } else {
			  throw new Error('Something went wrong');
		 }
	} catch (error) {
			  warningElement.classList.toggle('main__error--visible');
			  warningElement.textContent = error;
	}
}