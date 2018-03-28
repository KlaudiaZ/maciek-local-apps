import { init } from './movies/form';

console.log('Hello, I am movies.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    init();
});