import { fetchData, filtering } from './modules/fetch_data.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
//import renderHTMLFindMusic from './modules/renderHTMLFindMusic.js'
//import renderHTMLFindSports from './modules/renderHTMLFindSports.js'
import navigationMobile from './modules/navigationMobile.js';
import scrollIntoEvents from './modules/scroll_into_events.js';
import scrollUp from './modules/scroll_up.js';
import wishlist from './modules/wishlist.js';
//import animateOnScroll from './modules/animate_on_scroll.js';

//fetchData();
const musicEvents = filtering(await fetchData(), 'Music');
//const sportEvents = filtering(await fetchData(), 'Sports');
//console.log(sportEvents)
//console.log(musicEvents)
//renderHTMLEvents(await fetchData());
//renderHTMLFindMusic(await fetchData());


renderHTMLEvents(await fetchData());
renderHTMLEvents(musicEvents, 'music');
//renderHTMLEvents(sportEvents, 'sports');
//renderHTMLFindSports(await fetchData());

navigationMobile();
scrollIntoEvents();
scrollUp();
wishlist();
//animateOnScroll();


