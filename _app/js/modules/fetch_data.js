export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const currentEvents = 20;
    const rootUrl = `https://app.ticketmaster.com/discovery/v2`;
    const endpoint = `${rootUrl}/events?&apikey=${apiKey}&size=${currentEvents}&countryCode=no`;

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

export const search = (data, city) => {
    return data.filter(event => {
        return event._embedded.venues[0].city.name === inputValue;
    });
}

function handleError(error) {

}