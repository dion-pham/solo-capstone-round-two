import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartReducer, { ADD_TO_CART } from "../../store/cart";

const Cart = () => {
    const {cart} = useSelector(state=> state.cart)
    const dispatch = useDispatch()

    const changeCartQuantity = (e, product) => {
        const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

        cart.forEach(item => {
            if (item.id === product.id) {
                item.quantity = e.target.value
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: ADD_TO_CART,
            payload: cart
        })
    }

    let cartRender;
    cart.length ? cartRender = (cart.map((product) =>
    <div key={product.id} className='cart-card'>
        <Link className='cart-card-link' to={`/products/${product.id}`}>
            <img src= {product.img_url1} alt="Product's image" className='card-splash-image'></img>
        </Link>
        <div>
            <div>
                {product.name}
                {product.size}
            </div>
            <div>
                <h2>Price</h2>
                ${product.price}
            </div>
            <div>
                <h2>Quantity</h2>
                <input
                    type='number'
                    min = '1'
                    max = '5'
                    value={product.quantity}
                    onChange = {e => changeCartQuantity(e,product)}
                />
            </div>
            <div>
                <h2>Total</h2>
                ${product.price*product.quantity}
            </div>
        </div>
    </div>
        ))
        : cartRender = (<h1>Your cart is currently empty.</h1>)

    let cartSubtotal;
    cart.length? cartSubtotal = (
    <div>
        <h1>
            Subtotal
            ${cart.reduce((sum, product) => sum + (product.quantity*product.price), 0)}
        </h1>
    </div>
    )
    : cartSubtotal = (<h2>Purchase something</h2>)



    return (
        <div>
            <div>
                {cartRender}
            </div>
            <div>
                {cartSubtotal}
            </div>

        </div>
    )
}

export default Cart
