import axios from "axios";
import { baseUrl } from "../constants/global";

const favoritosApi = axios.create({
    baseURL: baseUrl + "favoritos"
});

export const getAllFavoritos = () => { return favoritosApi.get("/"); }
export const getFavorito = (id) => { return favoritosApi.get(`/${id}/`); }
export const createFavorito = (data) => { return favoritosApi.post("/", data); }
export const updateFavorito = (id, data) => { return favoritosApi.put(`/${id}/`, data); }
export const deleteFavorito = (id) => { return favoritosApi.delete(`/${id}/`); }