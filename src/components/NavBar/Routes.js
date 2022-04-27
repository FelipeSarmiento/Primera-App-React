import React from 'react'
import NavBar from './NavBar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Productos } from '../Sections/Productos'
import { Home } from '../Sections/Home'
import { Login } from '../Sections/Login'
import {Images} from "../Sections/Images";


export const Rutas = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container mx-auto py-5">
                    <Routes>

                        <Route exact path="/" element={ <Home/>}/>
                        <Route exact path="/Products" element={ <Productos />}  />
                        <Route exact path="/login" element={ <Login/>} />
                        <Route exact path="/images" element={ <Images/>} />
                        <Route path="*" element={ <Home/>} />

                    </Routes>
                </div>
            </div>
        </Router>
    )
}