import axios from "axios";
const BASE_URL = "http://localhost:8001/api" ;


var Token = JSON.parse(JSON.parse(localStorage.getItem('persist:Kilo')).Userdata).loginData[0] &&
JSON.parse(JSON.parse(localStorage.getItem('persist:Kilo')).Userdata).loginData[0].accesstoken 

console.log(Token , 'XXXXXXXXX')
export const publucRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`}
})