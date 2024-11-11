import axios from "axios";
import { json } from "react-router-dom";

const api = axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        "Content-Type":'application/json'
    }
});
export default api;