import { fetchData } from "./api";
import { page, reset } from "./pagination";
import { names } from "./search-form";
const list = document.querySelector(".list");

function createMarkup(data) {
    const markup = data
        .map(({ id, name
        }) =>
            `<li id ="${id}">
          
            <p id = "${id}">${name}</p>
            </li>
`)
        
        .join("");
    list.innerHTML = markup;
}

export async function renderData(page, names) {
    const data = await fetchData(page, names);
    console.log(data); 
    if (page === 1) {
        reset(data.page.totalElements)
    }
    
    createMarkup(data._embedded.events);
};
renderData(page, names);