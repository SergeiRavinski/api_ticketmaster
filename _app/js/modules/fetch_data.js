export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const endpoint = `https://app.ticketmaster.com/discovery/v2/events?&apikey=${apiKey}&locale=no`;
    const response = await fetch(endpoint);
    const result = await response.json();
    //console.log(response)
    const events = [result];


    const divElement = document.getElementById('events');

    //for (const event of events) {
    //    renderList(event);
    //    console.log(event._embedded.events[3]) 
    //}
    events.forEach(event => {
            renderList(event);
                console.log(event) 
    })

    function renderList(event) {

        const divForImages = document.createElement('img');
        divForImages.setAttribute('src', `${event._embedded.events[0].images[0]}`);
        divElement.appendChild(divForImages);

        const liForEvents = document.createElement('li');
        liForEvents.textContent = (`Event: ${event._embedded.events[6].name}, genre: ${event._embedded.events[6].classifications[0].genre.name}, location: (${event._embedded.events[6].dates.timezone}), promoter: ${event._embedded.events[6].promoter.name}`);
        divElement.appendChild(liForEvents);

        const liForEvents1 = document.createElement('li');
        liForEvents1.textContent = (`Event: ${event._embedded.events[9].name}, genre: ${event._embedded.events[9].classifications[0].genre.name}, location: (${event._embedded.events[9].dates.timezone}), promoter: ${event._embedded.events[9].promoter.name}`);
        divElement.appendChild(liForEvents1);

        const liForEvents2 = document.createElement('li');
        liForEvents2.textContent = (`Event: ${event._embedded.events[17].name}, genre: ${event._embedded.events[17].classifications[0].genre.name}, location: (${event._embedded.events[17].dates.timezone}), promoter: ${event._embedded.events[17].promoter.name}`);
        divElement.appendChild(liForEvents2);

        const liForEvents3 = document.createElement('li');
        liForEvents3.textContent = (`Event: ${event._embedded.events[0].name}, genre: ${event._embedded.events[0].classifications[0].genre.name}, location: (${event._embedded.events[0].dates.timezone}), promoter: ${event._embedded.events[0].promoter.name}`);
        divElement.appendChild(liForEvents3);
    }



}



