import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_TMDM_TOKEN}`
    },
    baseURL:import.meta.env.VITE_TMDM_URL
})
export {axiosInstance}