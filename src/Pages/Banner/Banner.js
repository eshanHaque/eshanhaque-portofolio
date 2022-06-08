import React from 'react';
import { Link } from 'react-router-dom';
import '../Banner/Banner.css'
import img from '../../images/hero.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen bgColor">
            <div className="hero-content flex-col lg:flex-row myContent">
            <div class="h-shape"></div>
                <div className="image"><img src={img} className="max-w-sm rounded-lg shadow-2xl" /></div>
                <div className=''>
                    <h1 className="text-5xl font-bold text-white">Hi, I'm <span className='name'>Md. Yusuf Haque</span></h1>
                    <p className="py-6 text-white"> I'm a full stack Web Developer . I have many more different skills which I added below. I have completed Completed API project and web applications.</p>
                    <div className="btn-con">
                    <Link to="" className="main-btn">
                        <span className="btn-text ">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;