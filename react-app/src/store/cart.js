// constants
export const ADD_TO_CART = 'cart/addToCart'

// action
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
        dispatch({
            type: ADD_TO_CART,
            payload: cart
        })
    }
}

// thunks

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
        default:
            return state
    }
}

export default cartReducer
