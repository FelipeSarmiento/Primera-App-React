import React, {useEffect, useState} from 'react'
import { UserContext } from '../../hooks/UseContext/UseContext'
import { Rutas } from '../NavBar/Routes'

export const MainApp = () => {
    const initialSession = (JSON.parse(localStorage.getItem('session')) || {
        id: "",
        user: "",
        email: "",
        password: "",
        logged: false
    })

    const [user , setUser ] = useState( initialSession );

    const handleLogin = (data) => {
        setUser({
            id: Math.random(),
            user: data.user,
            email: data.email,
            password: data.password,
            logged: true
        })

        localStorage.setItem('session', JSON.stringify(user))
    }

    const handleSignOut = () => {
        setUser({
            id: "",
            user: "",
            email: "",
            password: "",
            logged: false
        })
        localStorage.removeItem('session')
    }

    useEffect(() => {
        localStorage.setItem('session', JSON.stringify(user))
    }, [user]);


    return (
        <>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser,
                handleLogin: handleLogin,
                handleSignOut: handleSignOut
            }}>
                <Rutas />
            </UserContext.Provider>
        </>
    )
}