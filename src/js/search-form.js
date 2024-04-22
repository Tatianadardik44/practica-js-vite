import { renderData } from "./ivent";
import { page } from "./pagination";
const list = document.querySelector(".list")
const form = document.querySelector(".search-form");
form.addEventListener("submit", handleSubmit);

export let names = "";

function handleSubmit(event) {
    event.preventDefault();  
    
     names = event.target.elements.searchQuery.value.trim();
    console.log(names);
    list.innerHTML = "";
    renderData(page, names);
}