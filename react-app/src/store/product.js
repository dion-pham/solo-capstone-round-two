// constants
const LOAD_ALL_PRODUCTS = 'product/loadAllProducts'

// actions
export const getAllProducts = (data) => {
    return {
        type: LOAD_ALL_PRODUCTS,
        products: data
    }
}

// thunks
export const fetchAllProducts = () => async(dispatch) => {
    const response = await fetch('/api/products')

    if (response.ok) {
        const data = await response.json()
        dispatch(getAllProducts(data))
        return data
    }
}

// reducer
const initialState = {allProducts: {}}

const productReducer = (state=initialState, action) => {
    let productStateObj = {...state}
    switch (action.type) {
        case LOAD_ALL_PRODUCTS:
            productStateObj.allProducts = action.products
            return productStateObj
        default:
            return state
    }
}

export default productReducer
