import React from 'react'
import {UseFetch} from "../../hooks/useFetch/UseFetch";
import {UseCounter} from "../../hooks/useCounter/UseCounter";

export const Images = () => {

    const { state : category, setState : setCategory } = UseCounter('OnePunch')

    const { data, loading }  = UseFetch( 'https://api.giphy.com/v1/gifs/search?q=OnePunch&limit=1&api_key=AyCv0rLwmRNSi6xjlrx9ysBSkoYHEDo2' )
    console.log(data.url)

    return (
        <>
            {
                (loading ? "Loading" : <img src={data.url} alt={data.title } />)
            }
        </>
    )
}