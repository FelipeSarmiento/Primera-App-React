import React, { useState, useEffect } from 'react'


export const UseFetch = (url) => {

    const [data, setData] = useState({
        data: "", loading: true, error: null
    });

    useEffect( () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData({
                    data: {
                        id: data.data[0].id,
                        url: data.data[0].images?.downsized_medium.url,
                        title: data.data[0].title
                    },
                    loading: false,
                    error: null
                })
            })
    },[url]);

    return data
}