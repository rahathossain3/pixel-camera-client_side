import React from 'react';
import useReviews from '../../hooks/useReviews';


const HomeReviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            {
                reviews.map(review => <p>{review.email}</p>)
            }

        </div>
    );
};

export default HomeReviews;