import { fetchData, filtering } from './modules/fetch_data.js';
import { fetchDataSearch } from './modules/fetch_data_search.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
import renderHTMLSearch from './modules/renderHTMLSearch.js'
import header from './modules/header.js';
import scrollIntoEvents from './modules/scroll_into_events.js';
import scrollUp from './modules/scroll_up.js';
import animateOnScroll from './modules/animate_on_scroll.js';

const musicEvents = filtering(await fetchData(), 'Music');
//const sportEvents = filtering(await fetchData(), 'Sports');

renderHTMLEvents(await fetchData());
renderHTMLEvents(musicEvents, 'music');
renderHTMLSearch(await fetchDataSearch());
//renderHTMLEvents(sportEvents, 'sports');
header();
scrollIntoEvents();
scrollUp();
animateOnScroll();






