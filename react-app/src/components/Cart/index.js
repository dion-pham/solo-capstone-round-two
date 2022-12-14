import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import cartReducer, { actionAddToCart, clearCart, deleteFromCart, viewCart } from "../../store/cart";
import { addUserPurchase } from "../../store/purchase";
import { fetchAllUserPurchases } from "../../store/purchase";
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { cart } = useSelector(state => state?.cart)
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserId = useSelector(state => state.session.user.id)
    let subtotal = cart.reduce((sum, product) => sum + (product.quantity * product.price), 0)
    if (subtotal < 0) {
        subtotal = 0
    }

    const [shipping, setShipping] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);
    // const [quantChange, setQuantChange] = useState(false)

    useEffect(() => {
        const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

        dispatch(actionAddToCart(cart))
    }, [])

    const changeCartQuantity = (e, product) => {
        // setQuantChange(true)
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

    const errors = []
    useEffect(() => {
        if (shipping?.length === 0) {
            errors.push("Shipping field is required")
        }
        if (shipping?.length > 250) {
            errors.push("Shipping must be less than 250 characters")
        }

        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        cart.map((item) => {
            if (item.quantity > 5) {
                errors.push("Limit 5 of each item. ")
            } else if (item.quantity <1 ) {
                errors.push("Must be at least 1 of each item. Click 'Remove' if you no longer want an item.")
            }
        })

        setValidationErrors(errors)
    }, [shipping,cart])

    if (!sessionUserId)  {
        localStorage.removeItem('cart')
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
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
            localStorage.removeItem("cart")
            setShipping('')
            setValidationErrors([]);
            setHasSubmitted(false);
            dispatch(fetchAllUserPurchases(sessionUserId))
            return history.push('/orders')
            // return <Redirect to='/orders'
        }
    }

    let cartRender;
    cart.length ? cartRender = (
        <table className="table-container">
            <thead className="table-header">
                <tr>
                    <th scope='row' colspan='2'></th>
                    <th scope='row'>Price</th>
                    <th scope='row'>Quantity</th>
                    <th scope='row'>Total</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {cart.map((product) =>
                    <tr className="table-row">
                        <td className="table-column-1">
                            <Link className='cart-card-link' to={`/products/${product.id}`}>
                                <img src={product.img_url1} alt="Product's image" className='card-splash-image'></img>
                            </Link>
                        </td>
                        <td className="table-column-2">
                            <div className="product-name-and-size">
                            <Link className='cart-card-link' to={`/products/${product.id}`}>
                            {product.name}
                            </Link>
                            </div>
                            <div>
                                {product.size && (
                                    <div className="product-name-and-size">
                                        Size: {product.size}
                                    </div>
                                )}
                            </div>
                            <button
                                className="remove-button"
                                onClick={() => dispatch(deleteFromCart(product))}
                            >
                                Remove
                            </button>
                        </td>
                        <td className="table-column-3">
                            <div>
                                ${product.price}.00
                            </div>
                        </td>
                        <td className="table-column-4">
                            <div>
                                <input
                                    className="price-input"
                                    type='number'
                                    min='1'
                                    // max='5'
                                    value={product.quantity}
                                    onChange={e => changeCartQuantity(e, product)}
                                // display error message for quantity
                                />
                            </div>
                        </td>
                        <td className="table-column-5">
                            <div>
                                {(product.price * product.quantity) < 0 && (
                                    <div>
                                        $00.00
                                    </div>
                                ) }
                                   {(product.price * product.quantity) > 0 && (
                                    <div>
                                        ${product.price * product.quantity}.00
                                    </div>
                                ) }
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    ) : cartRender = (
        <div className="no-cart-container">
        <h1>
            You have nothing in your cart, {sessionUser.first_name}!
        </h1>
        <div className="cart-browse-link">
            <h1>
                <Link to={'/products'} className='cart-link-tag'>
                    Browse
                </Link>
            </h1>
            <h1>
                around for something you'll like.
            </h1>
        </div>
        <div>
        <img src={"https://i.imgur.com/tiAVkCW.png"} alt='logo' className="cart-logo-image"></img>
        </div>
    </div>
    )

    let cartSubtotal;
    cart.length ? cartSubtotal = (
        <div>
            <h4>
                Subtotal
                ${subtotal}.00
            </h4>
            <div className="cart-validation-errors">
                {hasSubmitted && validationErrors.length > 0 && (
                    <div>
                        <ul>
                            {validationErrors.map((error) => (
                                <li key={error}><i className='fa fa-exclamation-circle' />  {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <form className="cart-subtotal-form" onSubmit={handleSubmit}>
                    <input
                        className="cart-subtotal-form-input"
                        type="text"
                        placeholder='Shipping
                        Instructions'
                        value={shipping}
                        onChange={(e) => setShipping(e.target.value)} />
                    <button className="checkout-button">
                        Check Out
                    </button>
                </form>
            </div>
        </div>
    )
        : cartSubtotal = null

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-render">
                {cartRender}
            </div>
            <div className="cart-subtotal">
                {cartSubtotal}
            </div>
        </div>
    )
}

export default Cart
