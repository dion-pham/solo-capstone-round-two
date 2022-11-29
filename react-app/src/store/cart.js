import AddToCartForm from "../components/ProductAddToCartForm"

// constants
export const ADD_TO_CART = 'cart/addToCart'
export const DELETE_FROM_CART = 'cart/deleteFromCart'

// action
export const actionAddToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const actionDeleteFromCart = (data) => {
    return {
        type: DELETE_FROM_CART,
        payload: data
    }
}

// thunks
export const addToCart = product => async(dispatch) => {

    const cart = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : []

    const duplicates = cart.filter(item => item.id === product.id)
    // check this the id's of this filter later

    if (duplicates.length === 0) {
        const addedItem = {
            ...product,
            quantity: 1
        }
        cart.push(addedItem)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(actionAddToCart(cart))
    }
}

export const deleteFromCart = product => async(dispatch) => {
    const cart = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : []

    const newCart = cart.filter(item => item.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(newCart))

    dispatch(actionDeleteFromCart(newCart))
}

// export const clearCart = () => async(dispatch) => {
//     localStorage.setItem('cart', [])
//     dispatch(actionDeleteFromCart())
// }

// reducer
const initialState={cart:[]}

if (localStorage.getItem('cart')) {
    initialState.cart = JSON.parse(localStorage.getItem('cart'))
} else {
    initialState.cart = []
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...action.payload]
            }
        case DELETE_FROM_CART:
            return {
                cart: [...action.payload]
            }
        default:
            return state
    }
}

export default cartReducer
