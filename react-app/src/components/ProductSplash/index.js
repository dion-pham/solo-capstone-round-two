import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";
import './ProductSplash.css'

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const products = useSelector((state) => Object.values(state.products.allProducts))

    return (
        <div className="splash-outer-container-flex">
                <div className="splash-about">
                    <h4>
                        Welcome to aroundTwo! Look around for items to purchase.
                    </h4>
                </div>
            <div className="splash-inner-container-grid">
                {products.map((product) =>
                    <div key={product.id} className='product-card'>
                        <Link className='product-card-link' to={`/products/${product.id}`}>
                            <img src={product.img_url1} alt="Product's image" className='product-splash-image'></img>
                            <div className="product-card-name">
                                {product.name}
                            </div>
                            <div className="product-card-price">
                                ${product.price}.00
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products
