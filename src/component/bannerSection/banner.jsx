import React, { useState, useEffect } from 'react';
import './banner.scss';

const Banner = () => {
    const jobs = ["player", "designer", "coder"]
    const [currentJobIndex, setCurrentJobIndex] = useState(0);


    useEffect(() => {
        let intervalId;
        let timeoutId;
        const startInterval = () => {
            intervalId = setInterval(() => {
                setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
                clearInterval(intervalId);
                timeoutId = setTimeout(startInterval, 2805);
            },195);
        };

        startInterval();

        
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [jobs.length]);
    return (
        <section className="Banner1">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>HI, I'M ZYAN! CREATIVE
                        <div className="job-container">
                            <div key={currentJobIndex} className={`job current-job`}>
                                {jobs[currentJobIndex]}
                            </div>

                        </div>
                        </h2>
                        <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                        <div className='Banner1__left_bottom'>
                            <button>
                                Download CV <i className="fa-solid fa-download"></i>
                            </button>
                            <div className="videoifrem">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <i className="fa-solid fa-play"></i>Watch The Video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 Banner1__img">
                        <img src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
