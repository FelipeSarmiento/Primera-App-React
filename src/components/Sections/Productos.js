import React, {useReducer, useState, useEffect, useMemo} from 'react'
import {UseReducer} from "../../hooks/useReducer/UseReducer";
import { UseCounter } from "../../hooks/useCounter/UseCounter";

export const Productos = ({increment}) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('products')) || [];
    }

    const initialForm = {
        id: "",
        title: "",
        desc: "",
        price: ""
    }

    const [products, dispatch] = useReducer(UseReducer, [], init)
    const { state : productsItem, setState : setProductsItem } = UseCounter(init)
    // const [productsItem, setProductsItem] = useState(init);
    const [form, setForm] = useState(true);
    const {state : valuesInput, setState : setValuesInput, resetState : resetValues } = UseCounter(initialForm)
    /*const [valuesInput, setValuesInput] = useState({
        id: 0,
        title: "",
        desc: "",
        price: 0
    });*/

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
        setProductsItem(products)
    }, [products])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Math.random(),
            title: valuesInput.title,
            desc: valuesInput.desc,
            price: valuesInput.price
        }

        dispatch({
            type: 'add',
            payload: newProduct
        })

        setValuesInput({
            id: "",
            title: "",
            desc: "",
            price: ""
        })

    }

    const handleDelete = (productID) => {
        dispatch({
            type: 'delete',
            payload: productID
        })
    }

    const getProduct = (productID) => {
        products.map((item) => {
            if (item.id === productID) {
                setValuesInput({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    price: item.price
                })
                return {}
            }
        })
        setForm(!form)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const updateProduct = {
            id: valuesInput.id,
            title: valuesInput.title,
            desc: valuesInput.desc,
            price: valuesInput.price
        }

        dispatch({
            type: 'update',
            payload: updateProduct
        })
        setForm(!form)
        setValuesInput(initialForm)
    }

    const handleInputChange = ({target}) => {

        switch (target.id) {
            case "title":
                setValuesInput({
                    ...valuesInput,
                    title: target.value,
                })
                break;
            case "price":
                setValuesInput({
                    ...valuesInput,
                    price: target.value
                })
                break;
            case "description":
                setValuesInput({
                    ...valuesInput,
                    desc: target.value
                })
        }

    }


    return (
        <>
            <div className="grid grid-cols-3 my-10 w-screen justify-center container mx-auto">
                <div className="col-span-3 w-full mx-auto">
                    <p>Total Productos: {productsItem.length}</p>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-x-2.5">
                    {
                        productsItem.map(product => (
                            <div key={product.id} className="border border-black rounded-3xl h-[300px] flex-col py-5">

                                <div className="h-1/4 text-center">
                                    {product.title}
                                </div>
                                <div className="h-1/4 text-center">
                                    {product.desc}
                                </div>
                                <div className="h-1/4 text-center">
                                    {product.price}
                                </div>
                                <div
                                    className="h-1/4 text-center flex justify-evenly">
                                    <button onClick={() => {
                                        handleDelete(product.id);
                                    }} className="bg-red-600 h-7 w-24 rounded-xl">
                                        Borrar
                                    </button>
                                    <button onClick={() =>{
                                       getProduct(product.id)
                                    }} className="bg-green-600 h-7 w-24 rounded-xl">
                                        Editar
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>
                {
                    (form ?
                            <div className="flex items-start py-2">
                                <form onSubmit={handleSubmit} className="w-full text-center flex-col space-y-1.5">
                                    <h1>Agregar Productos</h1>
                                    <input id="title" onChange={handleInputChange} type="text"
                                           className="w-11/12 border border-black rounded-lg"
                                           placeholder="Titulo Producto" value={valuesInput.title}
                                           required/>
                                    <input id="description" onChange={handleInputChange} type="textarea"
                                           className="w-11/12 h-20 border border-black rounded-lg"
                                           placeholder="Descripcion" value={valuesInput.desc} required/>
                                    <input id="price" onChange={handleInputChange} type="text"
                                           className="w-11/12 border border-black rounded-lg" placeholder="Precio"
                                           value={valuesInput.price} required/>
                                    <button type="submit" className="bg-cyan-600 h-7 w-24 rounded-lg">Agregar</button>
                                </form>
                            </div>
                            :
                            <div className="flex items-start py-2">
                                <form onSubmit={handleUpdate} className="w-full text-center flex-col space-y-1.5">
                                    <h1>Editar Productos</h1>
                                    <input id="title" onChange={handleInputChange} type="text"
                                           className="w-11/12 border border-black rounded-lg"
                                           placeholder="Titulo Producto" value={valuesInput.title}
                                           required/>
                                    <input id="description" onChange={handleInputChange} type="textarea"
                                           className="w-11/12 h-20 border border-black rounded-lg"
                                           placeholder="Descripcion" value={valuesInput.desc} required/>
                                    <input id="price" onChange={handleInputChange} type="text"
                                           className="w-11/12 border border-black rounded-lg" placeholder="Precio"
                                           value={valuesInput.price} required/>
                                    <button type="submit" className="bg-cyan-600 h-7 w-24 rounded-lg">Actualizar</button>
                                </form>
                            </div>

                    )
                }

            </div>
        </>
    )
}