// constants
const ADD_ADDRESS = 'address/addAddress'
const LOAD_ADDRESS = 'address/loadAddress'
const EDIT_ADDRESS = 'address/editAddress'
// const DELETE_ADDRESS = 'address/deleteAddress'

// actions
export const actionAddAddress = (data) => {
    return {
        type: ADD_ADDRESS,
        address: data
    }
}

export const actionLoadAddress = (data) => {
    return {
        type: LOAD_ADDRESS,
        address: data
    }
}

export const ActionEditAddress = (data) => {
    return {
        type: EDIT_ADDRESS,
        address: data
    }
}
export const thunkLoadAddress = (id) => async (dispatch) => {
    const response = await fetch(`/api/address/user/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(actionLoadAddress(data))
        return data
    }
}

export const thunkAddAddress = (user_id, address1, city, state, country, zip_code) => async (dispatch) => {
    const response = await fetch('/api/address', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id,
            address1,
            city,
            state,
            country,
            zip_code
        }),
    })
    if (response.ok) {
        const createdAddress = await response.json();
        dispatch(actionAddAddress(createdAddress))
        return createdAddress
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

// add an edit thunk!!!
export const thunkEditAddress = (addressId, user_id, address1, city, state, country, zip_code) => async (dispatch) => {
    const response = await fetch(`/api/address/${addressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id,
            address1,
            city,
            state,
            country,
            zip_code
        }),
    })
    console.log(response, 'this is response')
    if (response.ok) {
        const edittedAddress = await response.json();
        dispatch(actionAddAddress(edittedAddress))
        return edittedAddress
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}



// reducer
const initialState = { userAddress: {} }

const addressReducer = (state = initialState, action) => {
    let addressStateObj = { ...state }
    switch (action.type) {
        case ADD_ADDRESS:
            addressStateObj.userAddress[action.address.id] = action.address
        case LOAD_ADDRESS:
            addressStateObj.userAddress = action.address
            return addressStateObj
        default:
            return state
    }
}

export default addressReducer
