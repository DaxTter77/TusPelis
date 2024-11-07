import axios from "axios";
import { baseUrl } from "../constants/global";

const favoritosUserApi = axios.create({
    baseURL: `${baseUrl}favoritos_user`
})

export const getAllFavoritosUser = async () => { return favoritosUserApi.get("/"); }