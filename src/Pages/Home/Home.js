import React from 'react';
import Banner from './Banner';
import DntalCare from './DntalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <DntalCare></DntalCare>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;