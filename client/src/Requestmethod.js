import axios from "axios";
const BASE_URL = "http://localhost:8001/api" ;

export const publucRequest = axios.create({
    baseURL:BASE_URL,
});

