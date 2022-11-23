import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
                <div key>
                    {product.name}
                </div>
            )}
        </div>
    )
}

export default Products
