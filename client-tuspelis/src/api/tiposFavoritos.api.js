import axios from 'axios';
import { baseUrl } from "../constants/global";

const tiposFavoritosApi = axios.create({
    baseURL: `${baseUrl}tipos_favoritos`
})

export const getAllTipos = async () => { return tiposFavoritosApi.get("/"); }

export const createTipo = (data) => { return tiposFavoritosApi.post("/", data); }

export const deleteTipo = (id) => { return tiposFavoritosApi.delete(`/${id}/`); }