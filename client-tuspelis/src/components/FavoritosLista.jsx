import { useEffect, useState } from "react";
import { getAllFavoritos } from "../api/favoritos.api";
import { FavoritosCard } from "./FavoritosCard";


export function FavoritosList() {
    const [listaData, setListaData] = useState([]);

    useEffect(() => {
        const loadData = async ()  => {
            const data = await getAllFavoritos();
            console.log(data);
            setListaData(data.data);
        }
        loadData();
    }, [])

    return (
        <div>
            {
                listaData.map(item => (
                    <FavoritosCard key={item.id_favorito} favorito={item} />
                ))
            }
        </div>
    )
}