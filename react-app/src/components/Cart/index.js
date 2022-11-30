import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,Redirect, useHistory } from "react-router-dom";
import cartReducer, { actionAddToCart, deleteFromCart } from "../../store/cart";
import { addUserPurchase } from "../../store/purchase";
import { fetchAllProducts } from "../../store/product";
import { fetchAllUserPurchases } from "../../store/purchase";

const Cart = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {cart} = useSelector(state=> state.cart)
    const sessionUserId = useSelector(state => state.session.user.id)
    const subtotal = cart.reduce((sum, product) => sum + (product.quantity*product.price), 0)


    const [shipping, setShipping] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);


    const changeCartQuantity = (e, product) => {
        const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

        cart.forEach(item => {
            if (item.id === product.id) {
                item.quantity = e.target.value
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(actionAddToCart(cart))
    }

    useEffect(() => {
        const errors = []
        if (shipping?.length === 0) {
            errors.push("Shipping field is required")
        }
        if (shipping?.length > 250) {
            errors.push("Shipping must be less than 250 characters")
        }
        setValidationErrors(errors)
    }, [shipping])

    if (!sessionUserId) return <Redirect to="/" />;


    const handleSubmit = async(e) => {
        e.preventDefault()
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot submit')


        const payload = {
                user_id: sessionUserId,
                pretax_total_price: subtotal,
                shipping_instructions: shipping,
                purchase_join: cart
            }

        let createdPurchase = await dispatch(addUserPurchase(payload))
        if (createdPurchase) {
            localStorage.setItem('cart', [])
            // redirect to order history page
            setShipping('')
            setValidationErrors([]);
            setHasSubmitted(false);
            dispatch(fetchAllUserPurchases(sessionUserId))
            history.push('/orders')


        }
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
                Size: {product.size}
                <button
                onClick={()=> dispatch(deleteFromCart(product))}
                >
                    Remove
                </button>
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
            ${subtotal}
        </h1>
        <div>
        {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map((error) => (
                            <li key={error}><i className='fa fa-exclamation-circle' />  {error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder='Shipping Instructions'
                        value={shipping}
                        onChange={(e) => setShipping(e.target.value)} />
                <button>
                    Check Out
                </button>
            </form>
        </div>
    </div>
    )
    : cartSubtotal = (
    <div>
        {/* <h2>Your cart is currently empty.</h2> */}
        <h2>Continue browsing.</h2>
    </div>
    )


    return (
        <div>
            <h1>Shopping Cart</h1>
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
