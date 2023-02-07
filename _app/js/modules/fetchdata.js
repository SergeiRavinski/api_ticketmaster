export const fetchData = async () => {
    const endpoint = 'https://app.ticketmaster.com/discovery/v1/events.json?WyccpB6oo7rfmkGMeApP2BriNGE68Y1j=4dsfsf94tyghf85jdhshwge334.'
    const response = await fetch(endpoint);
    //console.log(response);
    const result = await response.json();
    console.log(result)
}
fetchData()