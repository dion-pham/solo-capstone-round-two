import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import './ProductAddToCartForm.css'

const AddToCartForm = ({ targetProduct }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [size, setSize] = useState('x-small')

    // if (!sessionUser) return <Redirect to="/" />;

    // if you click on add to cart button, redirect to sign up page

    const handleSubmit = async (e) => {
        e.preventDefault()
        targetProduct.size = size
        dispatch(addToCart(targetProduct))
    }

    return (
        <div>
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
                </div>
            </form>
        </div>
    )
}

export default AddToCartForm
