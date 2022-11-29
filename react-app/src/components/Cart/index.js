import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../store/cart";

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

    return (
        <div>

            {cart.length ?
            (cart.map((product) =>
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
                                Price_
                                ${product.price}
                            </div>
                            <div>
                                Quantity_
                                <input
                                    type='number'
                                    min = '1'
                                    max = '5'
                                    value={product.quantity}
                                    onChange = {e => changeCartQuantity(e,product)}
                                />

                            </div>
                            <div>
                                Total_
                                {product.price*product.quantity}
                            </div>
                        </div>
                    </div>
                )
            )
            :
            (
                <h1>
                    Your cart is currently empty.
                </h1>
            )
        }
        </div>
    )
}

export default Cart
