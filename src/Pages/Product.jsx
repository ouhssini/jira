import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://digitalgifter.store/products.php=${id}`).then(res => console.log(res.data))
    })
    return (
        <div>
            <h1>Product</h1>
            <h1>This is Product Number </h1>
        </div>
    )
}

export default Product