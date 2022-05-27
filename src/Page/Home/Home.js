import React from 'react';
import Banner from './Banner/Banner';
import HomeProducts from './HomeProducts';
import HomeReviews from './HomeReviews';
import BusinessSummary from './BusinessSummary';
import AddComment from './AddComment';

const Home = () => {
    return (
        <div>
            <Banner />

            <HomeProducts></HomeProducts>

            <BusinessSummary></BusinessSummary>

            <HomeReviews></HomeReviews>

            <AddComment></AddComment>

        </div>
    );
};

export default Home;