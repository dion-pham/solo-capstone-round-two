import { useState, useEffect } from 'react';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLoadReviews } from '../../store/review';
import './ReviewSplash.css'

const ReviewSplash = () => {
    const dispatch = useDispatch()
    let { productId } = useParams()

    useEffect(() => {
        dispatch(thunkLoadReviews(Number(productId)))
    }, [dispatch, productId]);

    const allReviewsArray = useSelector((state) => Object.values(state.reviews.userReviews))

    return (
        <div className='review-card'>
            {allReviewsArray?.map((review) => (
                <li className='review-card-list' key={review.id}>
                    <div className='review-message'>
                        <i class="fa-solid fa-user"></i> "{review.message}"
                    </div>
                    <div className='review-user-info'>
                        {review.user && review.user?.first_name} rated this {review.rating} stars · {new Date(review.createdAt).toLocaleDateString()}
                    </div>
                </li>
            ))}
        </div>
    )
}

export default ReviewSplash
