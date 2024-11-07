import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createFavorito } from '../api/favoritos.api';
import { getAllTipos } from '../api/tiposFavoritos.api';


export function FavoritoForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [listaData, setListaData] = useState([]);    

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        const res = await createFavorito(data);
        console.log(res);
    });

    useEffect(() => {
        const loadData = async ()  => {
            const data = await getAllTipos();
            console.log(data.data);
            setListaData(data.data);
        }
        loadData();
    }, [])

    /*
    {
    "titulo": "string",
    "sinopsis": "string",
    "anio": "stri",
    "rating_general": 0,
    "genero": "string",
    "id_tipo": 0
    }
    */
    return (
        <div className="container">
            Formulario Favorito
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Ingrese el titulo" name="txtTitulo" id="txtTitulo" {...register("titulo", { required : true })} />
                {errors.titulo && <span style={{color:"red"}}>El titulo es requerido</span>}
                <br />
                <input type="text" placeholder="Ingrese el sinopsis" name="txtSinopsis" id="txtSinopsis" {...register("sinopsis", { required : true })} />
                {errors.sinopsis && <span style={{color:"red"}}>La sinopsis es requerida</span>}
                <br />
                <input type="text" placeholder="Ingrese el año" name="txtAnio" id="txtAnio" {...register("anio", { required : true })} />
                {errors.anio && <span style={{color:"red"}}>La año es requerida</span>}
                <br />
                <input type="text" placeholder="Ingrese el rating general" name="txtRatingGeneral" id="txtRatingGeneral" {...register("rating_general", { required : true })} />
                {errors.rating_general && <span style={{color:"red"}}>La rating general es requerida</span>}
                <br />
                <input type="text" placeholder="Ingrese el genero" name="txtGenero" id="txtGenero" {...register("genero", { required : true })} />
                {errors.genero && <span style={{color:"red"}}>La genero es requerid</span>}
                <br />
                <select name="selTipoFavorito" id="selTipoFavorito"  {...register("id_tipo", { required : true })}>
                    <option value="">Seleccione un valor</option>
                    {
                        listaData.map((item, index) => (
                            <option key={index} value={item.id_tipo}>{item.descripcion}</option>
                        ))
                    }
                </select>
                {errors.id_tipo && <span style={{color:"red"}}>El tipo favorito es requerido</span>}
                <button>Guardar</button>
            </form>
        </div>

    )
}
