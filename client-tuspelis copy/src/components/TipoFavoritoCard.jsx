import { useNavigate } from "react-router-dom"

export function TipoFavoritoCard({item}) {
    
    const navigate = useNavigate();
    return(
        <div className="card" style={{background: "#cac0ff3d"}} 
            onClick={() => {
                navigate('/tipos-favoritos/' + item.id_tipo)
            }}
        >
            <h3>{item.descripcion}</h3>
            <h5>{item.estado === "A" ? "Activo" : "Inactivo"}</h5>
        </div>
    )
}