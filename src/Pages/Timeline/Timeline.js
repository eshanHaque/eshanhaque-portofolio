import React from 'react';
import '../Timeline/Timeline.css'
const Timeline = () => {
    return (
        <div className='timlinePadding'>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2010 - present</p>
                    <h5>Web Developer<span> - Programming Hero</span></h5>
                    <p>
                        Front End Developer completed with React JS and Node JS.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2008 - 2011</p>
                    <h5>Front End Engineer<span> - Boogle, Inc.</span></h5>
                    <p>
                        Front End Developer completed with React JS and Node JS.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2016 - 2017</p>
                    <h5>Backend Developer<span> - Programming Hero</span></h5>
                    <p>
                        Completed 600 hours problem solving.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2013 - 2016</p>
                    <h5>API Integration<span> - Programming Hero</span></h5>
                    <p>
                    I am in love with coding. I get bored when I don't do any coding
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;