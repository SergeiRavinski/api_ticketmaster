export const fetchData = async () => {
    const apiKey = 'WyccpB6oo7rfmkGMeApP2BriNGE68Y1j'
    const endpoint = `https://app.ticketmaster.com/discovery/v2/events?&apikey=${apiKey}&locale=no`;
    const response = await fetch(endpoint);
    const result = await response.json();
    //console.log(response)
    const events = [result];

    events.forEach(event => {
            renderList(event);
                //console.log(event) 
    });

    function renderList(event) {

        const sectionEvents = document.querySelector('.main__events');

        const newEvent = document.createElement('div')
        newEvent.innerHTML = `
            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="#">
                    <img src="${event._embedded.events[0].images[0].url}" alt="">
                </a>
                <span>
                    <h5>${event._embedded.events[0].name}</h5>
                    <h6>Pris fra ${event._embedded.events[0].priceRanges[0].min} nok</h6>
                    <h6>${event._embedded.events[0].dates.start.localDate}</h6>
                </span>
            </div>
            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="#">
                    <img src="${event._embedded.events[3].images[3].url}" alt="">
                </a>
                <span>
                    <h5>${event._embedded.events[3].name}</h5>
                    <h6>Pris fra ${event._embedded.events[3].priceRanges[0].min} nok</h6>
                    <h6>${event._embedded.events[3].dates.start.localDate}</h6>
                </span>
            </div>

            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="#">
                    <img src="${event._embedded.events[9].images[9].url}" alt="">
                </a>
                <span>
                    <h5>${event._embedded.events[9].name}</h5>
                    <h6>Pris fra ${event._embedded.events[9].priceRanges[0].min} nok</h6>
                    <h6>${event._embedded.events[9].dates.start.localDate}</h6>
                </span>
            </div>

            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="#">
                    <img src="${event._embedded.events[8].images[8].url}" alt="">
                </a>
                <span>
                    <h5>${event._embedded.events[16].name}</h5>
                    <h6>Pris fra ${event._embedded.events[16].priceRanges[0].min} nok</h6>
                    <h6>${event._embedded.events[16].dates.start.localDate}</h6>
                </span>
            </div>

            <div class="main__images-filter-aalesund main__images-filter-all">
                <button></button>
                <a href="#">
                    <img src="${event._embedded.events[2].images[2].url}" alt="">
                </a>
                <span>
                    <h5>${event._embedded.events[2].name}</h5>
                    <h6>Pris fra ${event._embedded.events[2].priceRanges[0].min} nok</h6>
                    <h6>${event._embedded.events[2].dates.start.localDate}</h6>
                </span>
            </div>

            <div class="main__images-filter-aalesund main__images-filter-all">
            <button></button>
            <a href="#">
                <img src="${event._embedded.events[5].images[5].url}" alt="">
            </a>
            <span>
                <h5>${event._embedded.events[5].name}</h5>
                <h6>Pris fra ${event._embedded.events[5].priceRanges[0].min} nok</h6>
                <h6>${event._embedded.events[5].dates.start.localDate}</h6>
            </span>
        </div>
        `;
        sectionEvents.appendChild(newEvent);

        //sectionEvents.textContent = (`Event: ${event._embedded.events[6].name}, genre: ${event._embedded.events[6].classifications[0].genre.name}, location: (${event._embedded.events[6].dates.timezone}), promoter: ${event._embedded.events[6].promoter.name}`);
        //divElement.appendChild(sectionEvents);



        //const divForImages = document.createElement('img');
        //divForImages.setAttribute('src', `${event._embedded.events[0].images[0]}`);
        //divElement.appendChild(divForImages);

        //const liForEvents1 = document.createElement('li');
        //liForEvents1.textContent = (`Event: ${event._embedded.events[9].name}, genre: ${event._embedded.events[9].classifications[0].genre.name}, location: (${event._embedded.events[9].dates.timezone}), promoter: ${event._embedded.events[9].promoter.name}`);
        //divElement.appendChild(liForEvents1);

        //const liForEvents2 = document.createElement('li');
        //liForEvents2.textContent = (`Event: ${event._embedded.events[17].name}, genre: ${event._embedded.events[17].classifications[0].genre.name}, location: (${event._embedded.events[17].dates.timezone}), promoter: ${event._embedded.events[17].promoter.name}`);
        //divElement.appendChild(liForEvents2);

        //const liForEvents3 = document.createElement('li');
        //liForEvents3.textContent = (`Event: ${event._embedded.events[0].name}, genre: ${event._embedded.events[0].classifications[0].genre.name}, location: (${event._embedded.events[0].dates.timezone}), promoter: ${event._embedded.events[0].promoter.name}`);
        //divElement.appendChild(liForEvents3);

    }
    //renderList()



}



