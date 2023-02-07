import { myPromise } from "./modules/promise.js";
import { fetchData } from "./modules/fetchdata.js";
import { persons } from "./modules/collection.js";
import list from "./modules/list.js";

/* 
myPromise
  .then(value => `${value} etter promise`)
  .then(result => console.log(`${result} pluss en then`))
  .catch(err => console.log(err))
  .finally(() => console.log('promise er ferdig'));

console.log(myPromise);
const myFunction = a => a;
console.log(myFunction('Carlo')) 
fetchData();
*/

const { results } = persons; // deconstruct results key ut fra persons
list(results);
