export function FavoritosCard({favorito}) {
    console.log("Card:" + favorito);
    
    return(
        <div className="card">
            <img src={favorito.imagen_caratula} alt={"Caratula_" + favorito.titulo} style={{width: '200px', height:'100%'}} />
            <h3>{favorito.titulo}</h3>
            <h5>{favorito.anio} - {favorito.genero}</h5>
        </div>
    )
}