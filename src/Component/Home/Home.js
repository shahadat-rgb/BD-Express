import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Delivary from '../Delivary/Delivary';
import Product from '../product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <AboutUs></AboutUs>
            <CustomerReview></CustomerReview>
            <Delivary></Delivary>
        </div>
    );
};

export default Home;