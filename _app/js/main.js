import { fetchData, filtering } from './modules/fetch_data.js';
import renderHTMLEvents from './modules/renderHTMLEvents.js'
import renderHTMLFindMusic from './modules/renderHTMLFindMusic.js'
import renderHTMLFindSports from './modules/renderHTMLFindSports.js'
import navigationMobile from './modules/navigation.js';
import scrollUp from './modules/scroll_up.js';
import animateOnScroll from './modules/animate_on_scroll.js';

//fetchData();
const musicEvents = filtering(await fetchData(), `Music`);
/*console.log(sportEvents)
console.log(musicEvents)
renderHTMLEvents(await fetchData());
renderHTMLFindMusic(await fetchData());
renderHTMLFindSports(await fetchData());
*/
renderHTMLEvents(await fetchData());
renderHTMLEvents(musicEvents, `music`);

navigationMobile();
scrollUp();
//animateOnScroll();



