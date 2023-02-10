export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const currentEvents = 20;
    const endpoint = `https://app.ticketmaster.com/discovery/v2/events?&apikey=${apiKey}&locale=no&page=0&size=${currentEvents}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    //console.log(result);
    showEvents(result);
    //handleButtonFilterBergen(result);
}

function showEvents(data) {

    const sectionEvents = document.querySelector('.main__events');

    data._embedded.events.forEach((event) => {
    
        const newEvent = document.createElement('div');   
         

        newEvent.innerHTML = `
            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="${event.url}">
                    <img src="${event.images[2].url}" alt="">
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

//const buttonFilterBergen = document.querySelector('.main__buttons_filter-bergen');
//buttonFilterBergen.addEventListener('click', handleButtonFilterBergen);

//function handleButtonFilterBergen(filter) {

//    filter._embedded.events.filter((event) => {

//        if (!event._embedded.venues[0].city.name === 'Bergen') {

//            //newEvent.style.display = 'none'
//            console.log(event)
//        }
//    })          
//}









