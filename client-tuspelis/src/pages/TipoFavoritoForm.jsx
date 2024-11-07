import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createTipo, deleteTipo } from '../api/tiposFavoritos.api';

export function TipoFavoritoForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const params = useParams();
    console.log("Params: " + params);

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        const res = await createTipo(data);
        console.log(res);
    });

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