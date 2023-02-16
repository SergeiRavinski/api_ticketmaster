import { fetchData } from './modules/fetch_data.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
import renderHTMLFindMusic from './modules/renderHTMLFindMusic.js'
import navigationMobile from './modules/navigation.js';
import scrollUp from './modules/scroll_up.js';
import animateOnScroll from './modules/animate_on_scroll.js';

fetchData();
renderHTMLEvents(await fetchData());
renderHTMLFindMusic(await fetchData());
navigationMobile();
scrollUp();
animateOnScroll();



