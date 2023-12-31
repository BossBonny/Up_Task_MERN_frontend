import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuhtContext = createContext();

const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if(!token){
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await clienteAxios.get('/usuarios/perfil', config)
                setAuth(data)

            } catch (error) {
                setAuth({})
            }
            
            setCargando(false)
        }
        autenticarUsuario();
    }, [])

    const cerrarSesionAuth = () => {
        setAuth({})
    }

    return (
        <AuhtContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesionAuth
            }}
        >
            {children}
        </AuhtContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuhtContext;