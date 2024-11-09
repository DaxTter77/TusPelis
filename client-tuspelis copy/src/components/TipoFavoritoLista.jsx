import { useEffect, useState } from "react";
import { getAllTipos } from "../api/tiposFavoritos.api.js";
import { TipoFavoritoCard } from "./TipoFavoritoCard.jsx";

export function TiposFavoritosList() {
    const [listaData, setListaData] = useState([]);
    useEffect(() => {
        const loadData = async ()  => {
            const res = await getAllTipos();
            console.log(res);
            setListaData(res.data);
        }
        loadData();
    }, [])

    return (
        <div>
            {listaData.map(item => (
                <TipoFavoritoCard key={item.id_tipo} item={item}/>
            ))}
        </div>
    )
}

