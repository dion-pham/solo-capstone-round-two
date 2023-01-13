import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';
import { deleteUserPurchase } from '../../store/purchase';
import { thunkAddUserReview, thunkDeleteReview, thunkLoadReviews, thunkUpdateUserReview } from '../../store/review';
import './ReviewForm.css'

const ReviewForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    // display review form only if you are logged in

    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    useEffect(() => {
        dispatch(thunkLoadReviews(Number(productId)))
    }, [])

    const sessionUserId = useSelector((state) => state?.session?.user?.id)
    let { productId } = useParams()
    const allReviewsArray = useSelector((state) => Object.values(state.reviews.userReviews))
    const sessionUserReview = allReviewsArray?.find(review => review?.user_id === sessionUserId)

    useEffect(() => {
        const errors = []
        if (message.length === 0) {
            errors.push("Message field is required")
        }
        if (message.length.length > 255) {
            errors.push("Message field must be under 255 characters")
        }
        if (rating < 0 || rating > 5) {
            errors.push("Please rate between 1-5 stars!")
        }

        setErrors(errors)
    }, [message, rating])

    const createReview = async (e) => {
        e.preventDefault()
        setHasSubmitted(true)
        if (errors.length) return alert('Cannot submit')

        const payload = {
            user_id: sessionUserId,
            product_id: Number(productId),
            message,
            rating
        }

        console.log(payload, 'this is payload')
        let createdReview = await dispatch(thunkAddUserReview(Number(productId), payload))

        if (createdReview) {
            setMessage('')
            setRating('')
            setErrors([]);
            setHasSubmitted(false);
            dispatch(thunkLoadReviews(Number(productId)))
            return history.push(`/products/${productId}`);
        }
    }

    const updateReview = async (e) => {
        e.preventDefault()
        setHasSubmitted(true)
        if (errors.length) return alert('Cannot submit')

        const payload = {
            user_id: sessionUserId,
            product_id: Number(productId),
            message,
            rating
        }

        console.log(payload, 'this is payload')
        let edittedReview = await dispatch(thunkUpdateUserReview(sessionUserReview?.id, payload))

        if (edittedReview) {
            setErrors([]);
            setHasSubmitted(false);
            dispatch(thunkLoadReviews(Number(productId)))
            return history.push(`/products/${productId}`);
        }
    }

    const deleteReview = async () => {
        const deletedReview = await dispatch(thunkDeleteReview(sessionUserReview?.id))
        if (deletedReview) {
            setMessage('')
            setRating('')
            dispatch(thunkLoadReviews(Number(productId)))
            return history.push(`/products/${productId}`);
        }
    }


    let createOrEditReviewButton;
    if (sessionUserId && !sessionUserReview) {
        createOrEditReviewButton = (<div className='review-container'>
            <form className='review-form' onSubmit={createReview}>
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
                        placeholder='Message'
                        name='message'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <div>
                    <input
                        type='number'
                        placeholder='Rating'
                        min='0'
                        name='rating'
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                    />
                </div>
                <button id='review-button' type='submit'>Submit Review</button>
            </form>
        </div>
        )
    } else if (sessionUserId && sessionUserReview) {
        createOrEditReviewButton =
            (<div className='review-container'>
                <form className='review-form' onSubmit={updateReview}>
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
                            placeholder='Message'
                            name='message'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            placeholder='Rating'
                            name='rating'
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                        />
                    </div>
                    <button id='review-button' type='submit'>Edit Review</button>
                </form>
                <div>
                <button id='delete-review-button'
                onClick={() => deleteReview()}
                >Delete Review</button>
                </div>
            </div>
            )
    }


    return (
        <div>
            {createOrEditReviewButton}
        </div>
    )
}

export default ReviewForm
