import axios from "axios";
import { ACCESS_TOKEN } from "../constants/global";
import { baseUrl } from "../constants/global";

const favoritosApi = axios.create({
    baseURL: baseUrl + "favoritos"
});

favoritosApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const getAllFavoritos = () => { return favoritosApi.get("/"); }
export const getFavorito = (id) => { return favoritosApi.get(`/${id}/`); }
export const createFavorito = (data) => { return favoritosApi.post("/", data); }
export const updateFavorito = (id, data) => { return favoritosApi.put(`/${id}/`, data); }
export const deleteFavorito = (id) => { return favoritosApi.delete(`/${id}/`); }