// constants
const LOAD_REVIEWS = 'review/loadReviews'
const ADD_REVIEW = 'review/addReview'
const EDIT_REVIEW = 'review/editReview'
const DELETE_REVIEW = 'review/deleteReview'

// actions
export const actionAddReview = (data) => {
    return {
        type: ADD_REVIEW,
        review: data
    }
}

export const actionLoadReviews = (data) => {
    return {
        type: LOAD_REVIEWS,
        review: data
    }
}

export const actionEditReview = (data) => {
    return {
        type: EDIT_REVIEW,
        review: data
    }
}

export const actionDeleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// thunks
export const thunkLoadReviews = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionLoadReviews(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkAddUserReview = (productId, payload) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    console.log(response, 'this is response!!1')
    if (response.ok) {
        const data = await response.json()
        dispatch(actionAddReview(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkUpdateUserReview = (reviewId, payload) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(actionEditReview(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkDeleteReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(actionDeleteReview(reviewId))
        return data
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
const initialState = { userReviews: {} }

const reviewsReducer = (state = initialState, action) => {
    let reviewStateObj = { ...state }
    switch (action.type) {
        case LOAD_REVIEWS:
            reviewStateObj.userReviews = action.review
            return reviewStateObj
        case ADD_REVIEW:
            reviewStateObj.userReviews[action.review.id] = action.review
            return reviewStateObj
        case EDIT_REVIEW:
            reviewStateObj.userReviews[action.review.id] = action.review
            return reviewStateObj
        case DELETE_REVIEW:
            delete reviewStateObj.userReviews[action.reviewId]
            return reviewStateObj
        default:
            return state
    }
}

export default reviewsReducer
