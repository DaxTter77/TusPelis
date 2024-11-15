import { useEffect, useState } from 'react';
import { authApi } from '../api/auth.api';

export function Home(){
    const [nombre, setNombre] = useState("None"); 
    const [apellido, setApellido] = useState("None"); 
    const [username, setUsername] = useState(""); 
    
    useEffect(() => {
        const loadData = async () =>{
            const res = await authApi.get("/me");
            console.log(res);
            if(res.data){
                setNombre(res.data.first_name ? res.data.first_name : "");
                setApellido(res.data.last_name ? res.data.last_name : "");
                setUsername(res.data.username ? res.data.username : "");
            }
        }
        loadData();
    })
    return <div>
        <h1 className="underline decoration-1">Inicio</h1>
        <p>Bienvenido a tusPelis</p>
        <p>Usuario: {username}</p>
        {
            nombre && <p>{nombre} {apellido}</p>
        }
    </div>
}