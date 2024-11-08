import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createFavorito, getFavorito, updateFavorito, deleteFavorito } from '../api/favoritos.api';
import { getAllTipos } from '../api/tiposFavoritos.api';


export function FavoritoForm(){
    const { register, handleSubmit, formState: { errors }, setValue,} = useForm();
    const params = useParams();
    const navigate = useNavigate();
    const [listaData, setListaData] = useState([]);    

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        //validacion
        if(params.id){
            console.log("modificando");
            await updateFavorito(params.id, data);
        }else{
            const res = await createFavorito(data);
            console.log(res);
        }
      
        navigate("/favoritos");
    });

    //para rellenar el formulario si hay un parametro en la url
    useEffect(() => {
        async function loadData() {
            if(params.id){
                console.log("solicitar datos");
                const res = await getFavorito(params.id);
                console.log(res);
                setValue('titulo', res.data.titulo);
                setValue('sinopsis', res.data.sinopsis);
                setValue('anio', res.data.anio);
                setValue('rating_general', res.data.rating_general);
                setValue('genero', res.data.genero);
                setValue('id_tipo', res.data.id_tipo);
            }
        }
        loadData();
    },[])

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
            {params.id && 
                (<button
                    onClick={async() => {
                        const accepted = window.confirm("¿Desea eliminar el tipo?");
                        if(accepted){
                            const res = await deleteFavorito(params.id);
                        }
                        navigate("/favoritos");
                    }}
                >
                    Eliminar
                </button>)
            }
            
        </div>

    )
}
