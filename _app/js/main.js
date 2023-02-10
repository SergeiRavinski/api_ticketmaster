import { fetchData } from "./modules/fetch_data.js";
import list from "./modules/list.js";
import Navigation from './modules/navigation.js';
import Scroll_up from './modules/scroll_up.js';
import Animate_on_scroll from './modules/animate_on_scroll.js';
import Filter from './modules/filter.js';

fetchData();
//showData();
//list();
Navigation();
Scroll_up();
Animate_on_scroll();
Filter();