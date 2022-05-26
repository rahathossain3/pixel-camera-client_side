import React from 'react';
import useReviews from '../../hooks/useReviews';


const HomeReviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='mt-10 pt-5 '>
            <h1 className='text-5xl text-center text-orange-500 mt-10 font-semibold mb-8'> Our happy Customer Reviews</h1>
            <hr className=' bg-gradient-to-tr' />
            {
                reviews.map(review => <p>{review.email}</p>)
            }

        </div>
    );
};

export default HomeReviews;