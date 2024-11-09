import { useState } from "react";
import { tokenApi } from  "../api/token.api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/global";

export function FormLogin({router, method}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "login" : "register";

    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()

        try{
            const res=await tokenApi.post(router, {email, password})
            console.log(res);

            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            }else{
                navigate("Login");    
            }

        } catch (error){
            alert(error)
        } finally{
            setLoading(false)
        }
    };
    
    return <form onSubmit={handleSubmit}>
        <h1>{name}</h1>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button type="submit">{name}</button>

    </form>


}