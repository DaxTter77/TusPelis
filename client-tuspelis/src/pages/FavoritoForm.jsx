import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createFavorito, getFavorito, updateFavorito, deleteFavorito } from '../api/favoritos.api';
import { getAllTipos } from '../api/tiposFavoritos.api';
import toast from 'react-hot-toast';


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
            toast.success("Favorito creado", {
                position: "bottom-right", 
                style: {backgroundColor: "green", 
                color: "white"}});
        }
      
        navigate("/favoritos");
    });

    //para rellenar el formulario si hay un parametro en la url
    useEffect(() => {
        async function loadData() {
            if(params.id){
                console.log("Se cargan los datos del id: " + params.id);
                const res = await getFavorito(params.id);
                console.log(res);
                setValue('titulo', res.data.titulo);
                setValue('sinopsis', res.data.sinopsis);
                setValue('anio', res.data.anio);
                setValue('rating_general', res.data.rating_general);
                setValue('genero', res.data.genero);
                setValue('id_tipo', res.data.id_tipo);
            }

            //Se cargan los selects
            const data = await getAllTipos();
            console.log(data.data);
            setListaData(data.data);
        }
        loadData();
    },[])


    return (
        <div className="w-full mx-auto h-full text-3xl">
        Añade un Favorito
            <div className="container text-xl bg-gray-700 px-3 rounded-md py-5">
                <form onSubmit={onSubmit} className="
                w-full
                text-black
                grid grid-cols-[2fr_1fr_2fr] gap-4
                ">
                    <input type="text" placeholder="Ingrese el titulo" name="txtTitulo" 
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                     border-0 border-b-2 border-gray-300 
                     appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
                     focus:outline-none focus:ring-0 
                     focus:border-blue-600 peer" id="txtTitulo"  {...register("titulo", { required : true })} />
                    {errors.titulo && <span style={{color:"red"}}>El titulo es requerido</span>}
                    <br />
                    <input type="text" placeholder="Ingrese el sinopsis" name="txtSinopsis" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-start-1" id="txtSinopsis" {...register("sinopsis", { required : true })} />
                    {errors.sinopsis && <span style={{color:"red"}}>La sinopsis es requerida</span>}
                    <br />
                    <input type="text" placeholder="Ingrese el año" name="txtAnio" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-start-1" id="txtAnio" {...register("anio", { required : true })} />
                    {errors.anio && <span style={{color:"red"}}>El año es requerido</span>}
                    <br />
                    <input type="text" placeholder="Ingrese el rating general" name="txtRatingGeneral" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-start-3 row-start-1" id="txtRatingGeneral" {...register("rating_general", { required : true })} />
                    {errors.rating_general && <span style={{color:"red"}}>El rating general es requerido</span>}
                    <br />
                    <input type="text" placeholder="Ingrese el genero" name="txtGenero" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-start-3 row-start-2" id="txtGenero" {...register("genero", { required : true })} />
                    {errors.genero && <span style={{color:"red"}}>El genero es requerido</span>}
                    <br />
                    <select name="selTipoFavorito" id="selTipoFavorito" className="rounded-md bg-transparent text-gray-400 underline col-start-3 row-start-3" {...register("id_tipo", { required : true })}>
                        <option value="">Seleccione el tipo de media</option>
                        {
                            listaData.map((item, index) => (
                                <option key={index} value={item.id_tipo}>{item.descripcion}</option>
                            ))
                        }
                    </select>
                    <br className='py-50'/>

                    {errors.id_tipo && <span style={{color:"red"}}>El tipo favorito es requerido</span>}
                    <button className="
                        none 
                        rounded-lg 
                        bg-blue-700 
                        py-3
                        text-xs font-bold uppercase text-white 
                        shadow-md transition-all 
                        hover:bg-blue-900 focus:opacity-[0.85] focus:shadow-none 
                        disabled:opacity-50 disabled:shadow-none 
                        col-start-2">Guardar</button>
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
        </div>

    )
}
