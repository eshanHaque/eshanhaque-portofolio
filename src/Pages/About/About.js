import React from 'react';
import { Link } from 'react-router-dom';
import '../About/About.css'
const About = () => {
    return (
        <div className='bgColor'>
            <div className="text-center">
                <h2 className='text-5xl font-bold text-white'>About <span className='textColor'>me</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p className='text-xl'>
                        I am a full stack web developer. I can get rid of any work in React coding very quickly. Also, I am very proficient in HTML, CSS, JS, Node js, NoSQL, MongoDB, Bootstrap, Tailwindcss, React Bootstrap, React js, DaisyUI, and React Native. In addition to these, I am still learning a lot of coding.
                    </p>
                    <div className="btn-con">
                    <Link to="" className="about-btn">
                        <span className="btn-text ">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;