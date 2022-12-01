import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { deletingPurchase, updateUserPurchase } from '../../store/purchase';
import { fetchAllProducts } from '../../store/product';
import { fetchAllUserPurchases } from '../../store/purchase';

const PurchaseHistoryEditForm = ({order}) => {
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session?.user.id)
    const history = useHistory()

    useEffect(()=> {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])

    const [shipping, setShipping] = useState(order.shipping_instructions)
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []
        if (shipping?.length === 0) {
            errors.push("Shipping field is required")
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
            setHasSubmitted(false);
            dispatch(fetchAllUserPurchases(sessionUserId))
            // hideForm();
        }
    };

    const deletePurchase = async() => {
        const deletedPurchase = await dispatch(deletingPurchase(order.id))
        if (deletedPurchase) {
            dispatch(fetchAllUserPurchases(sessionUserId))
            return history.push('/orders')
        }
    }

    return (
        <div>
            {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map((error) => (
                            <li key={error}> <i className='fa fa-exclamation-circle' /> {error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder='Shipping Info'
                    value={shipping}
                    onChange={(e) => setShipping(e.target.value)} />
                <button>
                    Change Shipping
                </button>
            </form>
            <button className='refund-button' onClick={() => {
            deletePurchase()
            }}
            >
                Refund
            </button>
        </div>
    )
}

export default PurchaseHistoryEditForm
