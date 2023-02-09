export const fetchData = async () => {
    const endpoint = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const response = await fetch(endpoint);
    const result = await response.json();
    console.log(result)


    //for (const res of result) {
    //    console.log(res)
    //}
}

