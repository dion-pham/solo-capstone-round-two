// constants
const ADD_USER_PURCHASE = 'purchase/addUserPurchase'
const LOAD_ALL_USER_PURCHASES = 'purchase/loadAllUserPurchases'
const EDIT_USER_PURCHASE = 'purchase/editUserPurchase'
const DELETE_USER_PURCHASE = 'purchase/deleteUserPurchase'

// actions
export const actionAddUserPurchase = (data) => {
    return {
        type: ADD_USER_PURCHASE,
        purchase: data
    }
}

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

export const deleteUserPurchase = (id) => {
    return {
        type: DELETE_USER_PURCHASE,
        id
    }
}

// thunks
export const addUserPurchase = (newPurchaseData) => async(dispatch) => {
    const response = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPurchaseData),
    });

    if (response.ok) {
        const data = await response.json()
        dispatch(actionAddUserPurchase(data))
        return data
    }
}

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

export const deletingPurchase = (id) => async(dispatch) => {
    const response = await fetch(`/api/purchases/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteUserPurchase(id))
    }
}

// reducer
const initialState = {userPurchases: {}}

const purchaseReducer = (state=initialState, action) => {
    let purchaseStateObj = {...state}
    switch (action.type) {
        case ADD_USER_PURCHASE:
            purchaseStateObj.userPurchases[action.purchase.id] = action.purchase
            return purchaseStateObj
        case LOAD_ALL_USER_PURCHASES:
            purchaseStateObj.userPurchases = action.purchases
            return purchaseStateObj
        case EDIT_USER_PURCHASE:
            purchaseStateObj.userPurchases[action.purchase.id] = action.purchase
            return purchaseStateObj
        case DELETE_USER_PURCHASE:
            delete purchaseStateObj.userPurchases[action.id]
            return purchaseStateObj
        default:
            return state
    }
}

export default purchaseReducer
