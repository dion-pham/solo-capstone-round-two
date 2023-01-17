import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { deletingPurchase, updateUserPurchase } from '../../store/purchase';
import { fetchAllProducts } from '../../store/product';
import { fetchAllUserPurchases } from '../../store/purchase';
import './PurchaseHistoryEditForm.css'

const PurchaseHistoryEditForm = ({ order }) => {
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session?.user.id)
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])

    const [shipping, setShipping] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []
        if (shipping?.length === 0) {
            errors.push("Shipping required!")
        }
        if (shipping?.length > 100) {
            errors.push("Shipping must be less than 100 characters")
        }
        setValidationErrors(errors)
    }, [shipping])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot submit')

        const payload = {
            shipping_instructions: shipping
        };

        let edittedShipping = await dispatch(updateUserPurchase(order.id, payload))
        if (edittedShipping) {
            setValidationErrors([]);
            setShipping('')
            setHasSubmitted(false);
            dispatch(fetchAllUserPurchases(sessionUserId))
            // hideForm();
        }
    };

    const deletePurchase = async () => {
        const deletedPurchase = await dispatch(deletingPurchase(order.id))
        if (deletedPurchase) {
            dispatch(fetchAllUserPurchases(sessionUserId))
            return history.push('/orders')
        }
    }

    return (
        <div className='edit-shipping-container'>
            <div>
                {hasSubmitted && validationErrors.length > 0 && (
                    <div className='edit-shipping-errors'>
                        <ul>
                            {validationErrors.map((error) => (
                                <li key={error}
                                    className='shipping-error-list-item'
                                > <i className='fa fa-exclamation-circle' /> {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <form onSubmit={handleSubmit} className='edit-shipping-form' >
                    <div className='edit-shipping-input-and-button'>
                        <input
                            placeholder='Edit Shipping Info'
                            value={shipping}
                            onChange={(e) => setShipping(e.target.value)} />
                        <button className='change-shipping-button'>
                            Edit Shipping Info
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <button className='refund-button' onClick={() => {
                        deletePurchase()
                    }}
                    >
                        Refund
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistoryEditForm
