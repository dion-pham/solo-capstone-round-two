// constants
const LOAD_ALL_USER_PURCHASES = 'purchase/loadAllUserPurchases'
const EDIT_USER_PURCHASE = 'purchase/editUserPurchase'

// actions
export const getAllUserPurchases = (data) => {
    return {
        type:LOAD_ALL_USER_PURCHASES,
        purchases: data
    }
}

export const editUserPurchase = (data) => {
    return {
        type:EDIT_USER_PURCHASE,
        purchase: data
    }
}

// thunks
export const fetchAllUserPurchases = (id) => async(dispatch) => {
    const response = await fetch(`/api/purchases/user/${id}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getAllUserPurchases(data))
        return data
    }
}

export const updateUserPurchase = (id, payload) => async(dispatch) => {
    const response = await fetch(`/api/purchases/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(editUserPurchase(data))
        return data
    }

}

// reducer
const initialState = {userPurchases: {}}

const purchaseReducer = (state=initialState, action) => {
    let purchaseStateObj = {...state}
    switch (action.type) {
        case LOAD_ALL_USER_PURCHASES:
            purchaseStateObj.userPurchases = action.purchases
            return purchaseStateObj
        case EDIT_USER_PURCHASE:
            purchaseStateObj.userPurchases[action.purchase.id] = action.purchase
        default:
            return state
    }
}

export default purchaseReducer
