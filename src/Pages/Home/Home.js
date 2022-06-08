import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import '../Home/Home.css'
import Mywork from '../Mywork/Mywork';
import Timeline from '../Timeline/Timeline';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Timeline></Timeline>
            <Mywork></Mywork>
        </div>
    );
};

export default Home;