import React, {useContext} from 'react'
import {UserContext} from '../../hooks/UseContext/UseContext';
import {UseCounter} from '../../hooks/useCounter/UseCounter'

export const Login = () => {

    const {user, setUser, handleLoginr} = useContext(UserContext)

    const {state: valuesLogin, setState: setValuesLogin} = UseCounter({});
    const {state: valuesRegister, setState: setValuesRegister} = UseCounter({});

    const HandleInputChangeLogin = ({target}) => {
        switch (target.id) {
            case 'username':
                setValuesLogin({
                    ...valuesLogin,
                    user: target.value
                })

                break;
            case 'password':

                setValuesLogin({
                    ...valuesLogin,
                    password: target.value
                })

                break;
        }
    }
    const HandleInputChangeRegister = ({target}) => {
        switch (target.id) {
            case 'username':

                setValuesRegister({
                    ...valuesRegister,
                    user: target.value
                })

                break;
            case 'email':

                setValuesRegister({
                    ...valuesRegister,
                    email: target.value
                })

                break;
            case 'password':

                setValuesRegister({
                    ...valuesRegister,
                    password: target.value
                })

                break;
        }
    }
    const HandleSubmitLogin = (e) => {
        e.preventDefault();
        if (valuesLogin.user === user.user && valuesLogin.password === user.password) {
            setUser({
                ...user,
                logged: true
            })
        }
        else {
            alert('Usuario o Contraseña Incorrecto')
        }
    }
    const HandleSubmitRegister = (e) => {
      e.preventDefault();
      setUser({
          ...user,
          id: Math.random(),
          user: valuesRegister.user,
          email: valuesRegister.email,
          password: valuesRegister.password,
          logged: false
      })
        console.log(user)
    }


    return (
        user.logged ? " SI " :
            <div className="grid grid-cols-2">
                <div className="text-center h-[500px]">
                    <div className="h-1/4 flex items-center justify-center">
                        Login
                    </div>
                    <form onSubmit={HandleSubmitLogin} className="h-3/4">
                        <div className="h-3/4">
                            <div className="">
                                <p>Username: {valuesLogin.username}</p>
                                <input onChange={HandleInputChangeLogin} id="username" type="text"
                                       className="border border-black rounded-lg h-10" required/>
                            </div>
                            <div className="">
                                <p>Password: {valuesLogin.password}</p>
                                <input onChange={HandleInputChangeLogin} id="password" type="password"
                                       className="border border-black rounded-lg h-10" required/>
                            </div>
                        </div>
                        <div className="h-1/4 flex items-center justify-evenly">
                            <button type="submit" className="bg-green-600 w-32 h-10 rounded-lg">Ingresar</button>
                            <button type="reset" className="bg-red-600 w-32 h-10 rounded-lg">Borrar</button>
                        </div>
                    </form>
                </div>
                <div className="text-center h-[500px]">
                    <div className="h-1/4 flex items-center justify-center">
                        Register
                    </div>
                    <form onSubmit={ HandleSubmitRegister } className="h-3/4">
                        <div className="h-3/4">
                            <div className="">
                                <p>Username: {valuesRegister.username}</p>
                                <input onChange={HandleInputChangeRegister} id="username" type="text"
                                       className="border border-black rounded-lg h-10" required/>
                            </div>
                            <div className="">
                                <p>Email: {valuesRegister.email}</p>
                                <input onChange={HandleInputChangeRegister} id="email" type="email"
                                       className="border border-black rounded-lg h-10" required/>
                            </div>
                            <div className="">
                                <p>Password: {valuesRegister.password}</p>
                                <input onChange={HandleInputChangeRegister} id="password" type="password"
                                       className="border border-black rounded-lg h-10" required/>
                            </div>
                        </div>
                        <div className="h-1/4 flex items-center justify-evenly">
                            <button type="submit" className="bg-green-600 w-32 h-10 rounded-lg">Registrar</button>
                            <button type="reset" className="bg-red-600 w-32 h-10 rounded-lg">Borrar</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}