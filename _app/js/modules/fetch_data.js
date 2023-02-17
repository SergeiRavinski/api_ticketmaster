export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const currentEvents = 10;
    const rootUrl = `https://app.ticketmaster.com/discovery/v2`;
    const endpoint = `${rootUrl}/events?&apikey=${apiKey}&size=${currentEvents}&countryCode=no&sort=name,date,asc`;
    const response = await fetch(endpoint);
    const result = await response.json();
    const { events } = result._embedded;
    return events;
}
    











