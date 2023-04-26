import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useHistory } from 'react-router-dom';
import { thunkAddAddress, thunkEditAddress, thunkLoadAddress } from '../../store/address';
import './AddressEditForm.css'

const AddressEditForm = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const sessionUserId = useSelector((state) => state.session.user.id)
    const addressState = useSelector((state) => Object.values(state.address.userAddress))
    // console.log(addressState, 'this is address state changing')


    const [address1, setAddress1] = useState(addressState[0]?.address1 ? addressState[0]?.address1 : '');
    const [city, setCity] = useState(addressState[0]?.city ? addressState[0]?.city : '');
    const [state, setState] = useState(addressState[0]?.state ? addressState[0]?.state : '');
    const [country, setCountry] = useState(addressState[0]?.country ? addressState[0]?.country : '');
    const [zip_code, setZip_Code] = useState(addressState[0]?.zip_code ? addressState[0]?.zip_code : '');
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []
        if (address1.length === 0) {
            errors.push("Address field is required")
        }
        if (city.length === 0) {
            errors.push("City field is required")
        }
        if (state.length === 0) {
            errors.push("State field is required")
        }
        if (country.length === 0) {
            errors.push("Country field is required")
        }
        if (zip_code.length === 0) {
            errors.push("Zip Code field is required")
        }
        setErrors(errors)
    }, [address1, city, state, country, zip_code])

    const editShipping = async (e) => {
        e.preventDefault()
        setHasSubmitted(true)
        if (errors.length) return alert('Cannot submit')

        let edittedAddress = await dispatch(thunkEditAddress(
            addressState[0].id,
            sessionUserId,
            // edit1
            address1,
            city,
            state,
            country,
            zip_code
            ))
        if (edittedAddress) {
            history.push(`/orders`);
            setErrors([]);
            setHasSubmitted(false);
            dispatch(thunkLoadAddress(sessionUserId))
        }

    }

    return (
        <div className='edit-shipping-container'>
            <form className='edit-shipping-form' onSubmit={editShipping}>
                <div>
                    {hasSubmitted && errors.length > 0 && (
                        <div>
                            The following errors were found:
                            <ul className='sign-up-errors'>
                                {errors.map((error, idx) => (
                                    <li key={idx}><i className='fa fa-exclamation-circle' />  {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Address 1'
                        name='address1'
                        onChange={(e) => setAddress1(e.target.value)}
                        value={address1}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='City'
                        name='city'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='State'
                        name='state'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Country'
                        name='country'
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='ZIP Code'
                        name='zip_code'
                        onChange={(e) => setZip_Code(e.target.value)}
                        value={zip_code}
                    />
                </div>
                <button  id ='edit-shipping-button'type='submit'>Edit Shipping Address</button>
            </form>
        </div>
    )
}

export default AddressEditForm
