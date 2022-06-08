import React from 'react';
import '../Mywork/Mywork.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
const Mywork = () => {
    return (
        <div className='bgColor'>
            <div className="main-title">
                <h2>My<span className='work'> Work</span></h2>
            </div>
            <p className="port-text text-xl">
                Here is some of my work that I did For Web Development
            </p>

            <div className="works">
                <div className="portfolios">
                    <div className="portfolio-item">
                        <div className="">
                            <img src={img1} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3 className='text-3xl'>Warehouse Management</h3>
                            <h3 className='text-xl'>Project Source</h3>
                            <div className="icons">
                                <a href="https://warehouse-management-38c9c.firebaseapp.com/" className="icon" target="_blank">
                                    <p>DEP</p>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="">
                            <img src={img2} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3 className='text-3xl'>Automotive Manufacturer</h3>
                            <h3 className='text-xl'>Project Source</h3>
                            <div className="icons">
                                <a href="https://manufacturer-web-ac07d.web.app/?fbclid=IwAR0_KGAvqKFrzdqjifXmSvh3gDidCVWL7wrOOTDFhyAscDppNJHg0zPw_4o" className="icon" target="_blank">
                                    <p>DEP</p>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="">
                            <img src={img3} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3 className='text-3xl'>Home Chef</h3>
                            <h3 className='text-xl'>Project Source</h3>
                            <div className="icons">
                                <a href="https://independent-service-prov-c32e6.firebaseapp.com/login" className="icon" target="_blank">
                                    <p>DEP</p>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Mywork;