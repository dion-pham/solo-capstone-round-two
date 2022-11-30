import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";
import AddToCartForm from "../ProductAddToCartForm";
import './ProductCard.css'

const ProductCard = () => {
    const dispatch = useDispatch()
    let { productId } = useParams()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const products = useSelector((state) => Object.values(state.products.allProducts))
    const index = productId - 1
    const targetProduct = products[index]

    return (
        <div className="product-card-container">
            <div className="product-card-left">
                <div>
                    {targetProduct?.name}
                </div>
                <div>
                    ${targetProduct?.price}
                </div>
                <div>
                    {targetProduct?.description}
                </div>
            </div>
            <div className="product-card-middle">
                <div className="img-wrapper">
                    <img src={targetProduct?.img_url1} alt="Product's image" className='product-card-image'></img>
                </div>
                <div className="img-wrapper">
                    <img src={targetProduct?.img_url2} alt="Product's image" className='product-card-image'></img>
                </div>
                <div className="img-wrapper">
                    <img src={targetProduct?.img_url3} alt="Product's image" className='product-card-image'></img>
                </div>
            </div>
            <div className="product-card-right">
                <AddToCartForm targetProduct={targetProduct} />
            </div>
        </div>
    )
}

export default ProductCard
