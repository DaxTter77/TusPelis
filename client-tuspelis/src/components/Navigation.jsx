import { Link } from 'react-router-dom';

export function Navigation() {
    return(
        <div className="nav">
            <Link to="/">
                <h1>Aplicación Tus Pelis</h1>
            </Link>
            <Link to="/favoritos">Favoritos</Link>
            <br/>
            <Link to="/favoritos/add">Agregar Favoritos</Link>
            <br/>
            <Link to="/tipos-favoritos">Tipos Favoritos</Link>
            <br/>
            <Link to="/tipos-favoritos/add">Agregar Tipos Favoritos</Link>
            <br/>
            <Link to="/favoritos-user">Favoritos Mios</Link>
            <br/>
            <Link to="/favoritos-user/add">Agregar Favoritos Mios</Link>

            
        </div>
    )
}