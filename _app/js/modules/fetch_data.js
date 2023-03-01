export const fetchData = async () => {

    const currentEvents = 200;
    const rootUrl = `https://app.ticketmaster.com/discovery/v2`;
    const endpoint = `${rootUrl}/events?&apikey=${apiKey}&countryCode=no&size=${currentEvents}`;

    let response = '';
    response = await fetch(endpoint);
    try {
        const result = await response.json();
        const { events } = result._embedded;
        return events;
    } catch (error) {
        handleError(error);   
    }
}

export const filtering = (data, type) => {
    return data.filter(event => {
        return event.classifications[0].segment.name === type;
    });
}

function handleError(error) {

}

import { apiKey } from '../env.js';