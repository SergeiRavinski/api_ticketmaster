export default async function fetchDataSearch() {

	const warningElement = document.querySelector('.main__error');
	let currentEvents = 200;
	const baseUrl = `https://app.ticketmaster.com/discovery/v2`;
	const options = {
		 method: "GET",
	}
	const endpoint = `${baseUrl}/events?&apikey=${apiKey}&locale=*&countryCode=no&size=${currentEvents}&sort=date,asc`;

	let response = '';
	response = await fetch(endpoint, options);

	try {
		 if(response.ok) {
			  const result = await response.json();
			  const { events } = result._embedded;
			  return events;
		 }else if(response.status === 404) {
			  throw new Error('Url not existing');
		 }else if(response.status === 401) {
			  throw new Error('Not authorized user');
		 }else if(response.status >= 500) {
			  throw new Error('Server not responding');
		 }else {
			  throw new Error('Something went wrong');
		 }
	} catch (error) {
			  warningElement.classList.toggle('main__error--visible');
			  warningElement.textContent = error;
	}
}

import { apiKey } from '../env.js';