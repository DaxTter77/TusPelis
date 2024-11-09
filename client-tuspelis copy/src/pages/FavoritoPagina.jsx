import { Link } from "react-router-dom"
import { FavoritosList } from "../components/FavoritosLista"


export function FavoritoPagina(){
    return (
        <div className="container">
            <h1>Favoritos</h1>
            <Link to="/favoritos/add">Agregar Favorito</Link>
            <br />
            <FavoritosList/>
        </div>
    )
}