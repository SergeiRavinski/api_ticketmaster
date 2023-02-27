import header from './modules/header.js';
import scrollUp from './modules/scroll_up.js';
import animateOnScroll from './modules/animate_on_scroll.js';
import { fetchData, filtering } from './modules/fetch_data.js';
//import { fetchDataSearch } from './modules/fetch_data_search.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
//import renderHTMLSearch from './modules/renderHTMLSearch.js'
import scrollIntoEvents from './modules/scroll_into_events.js';

const musicEvents = filtering(await fetchData(), 'Music');
//const searchEvents = search(await fetchData(), 'City');
//const sportEvents = filtering(await fetchData(), 'Sports');

header();
scrollUp();
animateOnScroll();
renderHTMLEvents(await fetchData());
renderHTMLEvents(musicEvents, 'music');
//renderHTMLEvents(sportEvents, 'sports');
//renderHTMLEvents(searchEvents, inputValue);
//renderHTMLSearch(await fetchDataSearch());
scrollIntoEvents();






