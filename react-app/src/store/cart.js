import AddToCartForm from "../components/ProductAddToCartForm"

// constants
export const VIEW_CART = 'cart/viewCart'
export const ADD_TO_CART = 'cart/addToCart'
export const DELETE_FROM_CART = 'cart/deleteFromCart'

// action
export const actionViewCart = (data) => {
    return {
        type: VIEW_CART,
        payload: data
    }
}

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
export const viewCart = () => async(dispatch) => {
    const cart = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : []

    if (cart) {
        dispatch(viewCart(cart))
        return cart
    }
}

export const addToCart = product => async(dispatch) => {
    const cart = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : []

    const duplicates = cart.filter(item => item.id === product.id)

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

// reducer
const initialState={cart:[]}

if (localStorage.getItem('cart')) {
    initialState.cart = JSON.parse(localStorage.getItem('cart'))
} else {
    initialState.cart = []
}

const cartReducer = (state=initialState, action) => {
    let cartStateObj = {...state}
    switch (action.type) {
        case VIEW_CART:
            cartStateObj.cart = [...action.payload]
            return cartStateObj
        case ADD_TO_CART:
            cartStateObj.cart = [...action.payload]
            return cartStateObj

        case DELETE_FROM_CART:
            cartStateObj.cart = [...action.payload]
            return cartStateObj
        default:
            return state
    }
}

export default cartReducer
