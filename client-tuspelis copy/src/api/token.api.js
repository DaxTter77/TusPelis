import axios from "axios";
import { baseUrl, ACCESS_TOKEN } from "../constants/global";

export const tokenApi = axios.create({
    baseURL: `${baseUrl}auth`
})

tokenApi.interceptors.request.use( 
    (config) =>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)

