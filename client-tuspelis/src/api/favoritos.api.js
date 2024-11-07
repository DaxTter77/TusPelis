import axios from "axios";
import { baseUrl } from "../constants/global";

const favoritosApi = axios.create({
    baseURL: baseUrl + "favoritos"
});

export const getAllFavoritos = () => { return favoritosApi.get("/"); }

export const createFavorito = (data) => { return favoritosApi.post("/", data); }