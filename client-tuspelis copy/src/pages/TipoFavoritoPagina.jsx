import { Link } from "react-router-dom"
import { TiposFavoritosList } from "../components/TipoFavoritoLista"

export function TipoFavoritoPagina(){
    return (
        <div className="container">
            <h1>Tipos de Favoritos</h1>
            <Link to="/tipos-favoritos/add">Agregar Tipo Favorito</Link>
            <br />
            <TiposFavoritosList />
        </div>
    )
}