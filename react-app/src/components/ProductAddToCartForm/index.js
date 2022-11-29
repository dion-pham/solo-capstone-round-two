import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import './ProductAddToCartForm.css'

const AddToCartForm = ({targetProduct}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [size, setSize] = useState('')


    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()
        targetProduct.size = size
        dispatch(addToCart(targetProduct))
    }

    return (
        <div>
            <form className='sizing-form'>
            <label>
                Size
            </label>
            <div>
                <ul>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice1'
                            value = {'x-small'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>X-SMALL</label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice2'
                            value = {'small'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>SMALL</label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice3'
                            value = {'medium'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>MEDIUM</label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice4'
                            value = {'large'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>LARGE</label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice5'
                            value = {'x-large'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>X-LARGE</label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='size'
                            id='choice6'
                            value = {'xx-large'}
                            onClick={(e) => setSize(e.target.value)}
                        />
                        <label>XX-LARGE</label>
                    </li>
                </ul>
                <button
                onClick={handleSubmit}
                >
                    ADD TO CART
                    {/* on submit, add this to local storage */}
                </button>
            </div>
            </form>
        </div>
    )

    // when 'add to cart' is clicked, then you put those items in local storage
    // when you go to 'cart' page, pull those items from local storage
    // when you click on check out on the cart page, a new instance of purchase is created
        // along with purchase_product instance for each item in the cart. these items are then
        // appended to that purchase
}

export default AddToCartForm
