export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const currentEvents = 20;
    const rootUrl = `https://app.ticketmaster.com/discovery/v2`;
    const endpoint = `${rootUrl}/events?&apikey=${apiKey}&size=${currentEvents}&locale=no`;
    const response = await fetch(endpoint);
    const result = await response.json();
    //console.log(result);
    showEvents(result);
    showEventsOslo(result);
    showEventsBergen(result);
}

function showEvents(data) {

    const sectionEvents = document.querySelector('.main__events-events');
    data._embedded.events.forEach((event) => {
    
        const newEvent = document.createElement('div');     
        newEvent.innerHTML = `
            <div>
                <button></button>
                <a href="${event.url}">
                    <img src="${event.images[3].url}" alt="">
                </a>
                <span>
                    <h5>${event.name}</h5>
                    <h6>${event._embedded.venues[0].city.name}</h6>
                    <h6>Pris fra ${event.priceRanges[0].min} ${event.priceRanges[0].currency}</h6>
                    <h6>${event.dates.start.localDate}</h6>
                </span>
            </div>
        `;
        sectionEvents.appendChild(newEvent);      
    });
}        

function showEventsOslo(data) {

    const sectionEventsOslo = document.querySelector('.main__events-oslo');
    data._embedded.events.filter(event => {

        if (event._embedded.venues[0].city.name === 'Oslo') {
    
            const newEventOslo = document.createElement('div');     
            newEventOslo.innerHTML = `
                <div>
                    <button></button>
                    <a href="${event.url}">
                        <img src="${event.images[3].url}" alt="">
                    </a>
                    <span>
                        <h5>${event.name}</h5>
                        <h6>${event._embedded.venues[0].city.name}</h6>
                        <h6>Pris fra ${event.priceRanges[0].min} ${event.priceRanges[0].currency}</h6>
                        <h6>${event.dates.start.localDate}</h6>
                    </span>
                </div>
            `;
            sectionEventsOslo.appendChild(newEventOslo);  
        }    
    });
}   

function showEventsBergen(data) {

    const sectionEventsBergen = document.querySelector('.main__events-bergen');
    data._embedded.events.filter(event => {

        if (event._embedded.venues[0].city.name === 'Bergen') {
    
            const newEventBergen = document.createElement('div');     
            newEventBergen.innerHTML = `
                <div>
                    <button></button>
                    <a href="${event.url}">
                        <img src="${event.images[3].url}" alt="">
                    </a>
                    <span>
                        <h5>${event.name}</h5>
                        <h6>${event._embedded.venues[0].city.name}</h6>
                        <h6>Pris fra ${event.priceRanges[0].min} ${event.priceRanges[0].currency}</h6>
                        <h6>${event.dates.start.localDate}</h6>
                    </span>
                </div>
            `;
            sectionEventsBergen.appendChild(newEventBergen);  
        }    
    });
}   
    











