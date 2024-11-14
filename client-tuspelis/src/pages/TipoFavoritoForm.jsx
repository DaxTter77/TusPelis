import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createTipo, deleteTipo, updateTipo, getTipo } from '../api/tiposFavoritos.api';
import { toast } from 'react-hot-toast'

export function TipoFavoritoForm(){
    const { register, handleSubmit, formState: { errors },setValue } = useForm();

    const navigate = useNavigate();

    const params = useParams();
    console.log("Params: " + params);

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        //Se valida si está modificando
        if(params.id){
            console.log("Modificando el id: " + params.id);
            await updateTipo(params.id, data);
        }else{
            const res = await createTipo(data);
            console.log(res);
        }
        navigate("/tipos-favoritos");
        toast.success("Registro creado correctamente",{
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#ffff"
            }
        });
    });
    useEffect(() => {
        async function loadData() {
            if(params.id){
                console.log("Se solicitand los datos del id: " + params.id);
                const res = await getTipo(params.id);
                console.log(res);
                setValue('descripcion', res.data.descripcion);
                setValue('estado', res.data.estado);
            }

        }
        loadData();
    },[])

    return (
        <div className="container">
            Formulario Tipo Favorito
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Ingrese la descripción" name="txtDescripcion" id="txtDescripcion" {...register("descripcion", { required : true })} />
                {errors.descripcion && <span style={{color:"red"}}>La descripción del tipo es requerido</span>}
                <br />
                <select name="selEstado" id="selEstado"  {...register("estado", { required : true })}>
                    <option value="">Seleccione un valor</option>
                    <option value="A">Activo</option>
                    <option value="I">Inactivo</option>
                </select>
                {errors.estado && <span style={{color:"red"}}>El estado del tipo es requerido</span>}
                <button>Guardar</button>
            </form>
            {params.id && 
                (<button
                    onClick={async() => {
                        const accepted = window.confirm("¿Desea eliminar el tipo?");
                        if(accepted){
                            const res = await deleteTipo(params.id);
                        }
                        navigate("/tipos-favoritos");
                    }}
                >
                    Eliminar
                </button>)
            }
        </div>

    )
}