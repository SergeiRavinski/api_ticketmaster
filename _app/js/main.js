import fetchData from './modules/fetch_data.js';
//import RenderHTML from './modules/renderHTML.js'
import NavigationMobile from './modules/navigation.js';
import Scroll_up from './modules/scroll_up.js';
import Animate_on_scroll from './modules/animate_on_scroll.js';

fetchData();
//RenderHTML(await FetchData());
NavigationMobile();
Scroll_up();
Animate_on_scroll();

