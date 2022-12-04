import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import LoginFormModal from '../auth/LoginFormModal';
import './ProductAddToCartForm.css'

const AddToCartForm = ({ targetProduct }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [size, setSize] = useState('x-small')
    const [addedToCart, setAddToCart] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setAddToCart(true)
        targetProduct.size = size
        dispatch(addToCart(targetProduct))
    }

    const handleSubmitNoSize = async (e) => {
        e.preventDefault()
        setAddToCart(true)
        dispatch(addToCart(targetProduct))
    }

    let addtoCartMessage;
    if (addedToCart && sessionUser) {
        addtoCartMessage = (
            <div className='add-to-cart-msg'>
                <div className='cart-green-msg'>Added to Cart!</div>
                <div>
                    <Link to={'/cart'} className='cart-link'>View Cart</Link>
                </div>
                <div className='cart-green-msg'>or</div>
                <div>
                    <Link to={'/products'} className='cart-link'>continue shopping</Link>
                </div>
            </div>
        )
    } else if (addedToCart) {
        addtoCartMessage = (
            <div className='add-to-cart-msg'>
                {/* <div className='cart-green-msg'>Please</div>
                <div>
                <Link to={'/login'} className='cart-link'>login</Link>
                </div>
                <div className='cart-green-msg'>or</div>
                <div>
                    <Link to={'/sign-up'} className='cart-link'>sign up</Link>
                </div>
                <div className='cart-green-msg'>to add this item to the cart!</div> */}
                You are not logged in to be able to add this item to the cart!
            </div>
        )
    }

    let accessoryRender;
    if (targetProduct?.category === 'Accessories') {
        accessoryRender = <div>
            <form className='sizing-form'>
                <button className='add-cart-button'
                    onClick={handleSubmitNoSize}
                >
                    ADD TO CART
                </button>
                {addtoCartMessage}
            </form>
        </div>
    } else {
        accessoryRender = <div>
            <form className='sizing-form'>
                <div className='size-radio-container'>
                    <h4 className='size-h4'>
                        Size
                    </h4>
                    <ul className='size-radio-container-ul'>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice1'
                                className='input'
                                value={'x-small'}
                                onClick={(e) => setSize(e.target.value)}
                                checked={size === 'x-small'}
                            />
                            <label
                                className='label-radio'
                                for='choice1'
                            >X-SMALL</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice2'
                                className='input'
                                value={'small'}
                                onClick={(e) => setSize(e.target.value)}
                            />
                            <label
                                className='label-radio'
                                for='choice2'
                            >SMALL</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice3'
                                className='input'
                                value={'medium'}
                                onClick={(e) => setSize(e.target.value)}
                            />
                            <label
                                className='label-radio'
                                for='choice3'
                            >MEDIUM</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice4'
                                className='input'
                                value={'large'}
                                onClick={(e) => setSize(e.target.value)}
                            />
                            <label
                                className='label-radio'
                                for='choice4'
                            >LARGE</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice5'
                                className='input'
                                value={'x-large'}
                                onClick={(e) => setSize(e.target.value)}
                            />
                            <label
                                className='label-radio'
                                for='choice5'
                            >X-LARGE</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                name='size'
                                id='choice6'
                                className='input'
                                value={'xx-large'}
                                onClick={(e) => setSize(e.target.value)}
                            />
                            <label
                                className='label-radio'
                                for='choice6'
                            >XX-LARGE</label>
                        </li>
                    </ul>
                    <button className='add-cart-button'
                        onClick={handleSubmit}
                    >
                        ADD TO CART
                    </button>
                    {addtoCartMessage}
                </div>
            </form>
        </div>
    }

    return (
        <div>
            {accessoryRender}
        </div>
    )
}

export default AddToCartForm
