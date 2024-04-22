import axios from 'axios';
const API_KEY = `EOdsm6K9mhOmZa1l14LJSm27TGHT9m32`;
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/`;
//  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}"

export async function fetchData(page, names){
    const response = await axios.get(`${BASE_URL}events.json?page=${page}&apikey=${API_KEY}&keyword=${names}`);
    console.log(response);
    return response.data;
};
fetchData(1);