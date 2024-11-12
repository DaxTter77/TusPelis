import { useNavigate } from "react-router-dom"
export function FavoritosCard({favorito}) {
    console.log("Card:" + favorito);
    const navigate = useNavigate();
    
    return(
        <div className="card"

        onClick={() => {
            navigate('/favoritos/' + favorito.id_favorito)
        }}>
            <img src={favorito.imagen_caratula} alt={"Caratula_" + favorito.titulo} style={{width: '200px', height:'100%'}} />
            <h3>{favorito.titulo}</h3>
            <h5>{favorito.anio} - {favorito.genero}</h5>
        </div>
    )
}