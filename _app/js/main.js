import header from './modules/header.js';
import scrollUp from './modules/scroll_up.js';
import animateOnScroll from './modules/animate_on_scroll.js';
import scrollIntoEvents from './modules/scroll_into_events.js';
import { fetchData, filtering } from './modules/fetch_data.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
import renderHTMLSearch from './modules/renderHTMLSearch.js'
import mapbox from './modules/mapbox.js'

const musicEvents = filtering(await fetchData(), 'Music');

header();
scrollUp();
animateOnScroll();
scrollIntoEvents();
renderHTMLEvents(await fetchData());
renderHTMLEvents(musicEvents, 'music');
renderHTMLSearch(await fetchData());
mapbox();







