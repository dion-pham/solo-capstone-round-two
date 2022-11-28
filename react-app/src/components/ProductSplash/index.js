import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const products = useSelector((state) => Object.values(state.products.allProducts))
    console.log('products', products)

    return (
        <div>
            {products.map((product) =>
                <div key={product.id} className='product-card'>
                    <Link className='product-card-link' to={`/products/${product.id}`}>
                    <img src= {product.img_url1} alt="Product's image" className='product-splash-image'></img>
                    <div>
                    {product.name}
                    ${product.price}
                    </div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Products
