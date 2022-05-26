import React from 'react';
import Banner from './Banner/Banner';
import HomeProducts from './HomeProducts';
import HomeReviews from './HomeReviews';

const Home = () => {
    return (
        <div>
            <Banner />

            <HomeProducts></HomeProducts>


            <HomeReviews></HomeReviews>


        </div>
    );
};

export default Home;