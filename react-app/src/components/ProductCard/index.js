import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";

const ProductCard = () => {
    const dispatch = useDispatch()
    let {productId} = useParams()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const products = useSelector((state) => Object.values(state.products.allProducts))
    const index = productId - 1
    const targetProduct = products[index]

    return (
        <div>
            {targetProduct?.name}
            {targetProduct?.description}
            {targetProduct?.price}
            <img src= {targetProduct?.img_url1} alt="Product's image" className='product-card-image'></img>
            <img src= {targetProduct?.img_url2} alt="Product's image" className='product-card-image'></img>
            <img src= {targetProduct?.img_url3} alt="Product's image" className='product-card-image'></img>
        </div>
    )
}

export default ProductCard
