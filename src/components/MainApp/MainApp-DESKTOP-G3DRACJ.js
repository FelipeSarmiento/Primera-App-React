import React, {useState} from 'react'
import { UseContext } from '../../hooks/UseContext/UseContex'
import { Rutas } from '../NavBar/Routes'

export const MainApp = () => {

    const [user , setUser ] = useState({
        id: "",
        user: "",
        email: "",
        password: ""
    });

    const handleLogin = (data) => {
        setUser({
            id: Math.random(),
            user: data.user,
            email: data.email,
            password: data.password
        })
    }

    return (
        <>
            <UseContext.Provider value={{
                user: user,
                setUser: setUser,
                handleLogin: handleLogin
            }}>

            </UseContext.Provider>
            <Rutas />
        </>
    )
}