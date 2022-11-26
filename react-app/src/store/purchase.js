// constants
const LOAD_ALL_PURCHASES = 'purchase/loadAllPurchases'

// actions
export const getAllPurchases = (data) => {
    return {
        type:LOAD_ALL_PURCHASES,
        purchases: data
    }
}

// thunks
export const fetchAllPurchases = ()
