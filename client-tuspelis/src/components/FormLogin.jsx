import { useState } from "react";
import { authApi } from  "../api/auth.api";
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
            const res=await authApi.post(router, {email, password})
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
    
    return (<div className="min-h-screen flex items-center justify-center bg-sky-100">
  <div className="bg-sky-100 flex justify-center items-center h-screen w-full">
    <div className="w-1/2 h-screen hidden lg:block">
      <img src="https://i.imgur.com/5JaVvmo.png" alt="Placeholder" className="object-cover w-full h-full" />
    </div>
    <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 text-gray-950">
      <h1 className="text-2xl font-semibold mb-4">Log into MyMovies</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 bg-sky-100">
          <label htmlFor="username" className="block text-gray-600">Username</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-950" autoComplete="off" value={email}  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">Password</label>
          <input type="password" id="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-950" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" className="text-red-500" />
          <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
        </div>
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">{name}</button>
      </form>
      <div className="mt-6 text-green-500 text-center">
        <a href="#" className="hover:underline">Sign up Here</a>
      </div>
    </div>
  </div>
</div>
)           
    
}