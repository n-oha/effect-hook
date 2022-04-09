import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Effect = () => {
    const [ data, setData ] = useState('')
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => { 
            setData(res.data.email)
            console.log("API was got data")
        })
    }, [count])

    const refresh = () => {
        window.location.reload()
    }

    return (
        <div>
            <h1>Hello World {data} </h1>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>CLICK</button>
            <button onClick={refresh}>REFRESH</button>
        </div>
    )
}

export default Effect