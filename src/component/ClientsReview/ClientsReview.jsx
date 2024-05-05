import React, { useState, useEffect } from 'react';
import './ClientsReview.scss';

const ClientsReview = () => {
    const reviews = [
        {
            text: ' Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.',
            author: 'John Doe',
            img:"https://zyan.vercel.app/images/testimonial/1.jpg",
        },
        {
            text: ' Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.',
            author: 'Jane Smith',
            img:"https://zyan.vercel.app/images/testimonial/2.jpg",
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % (reviews.length / 1));
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [reviews.length]);

    return (
        <section className='ClientsReview'>
            <div className="container">
                <div className="head">
                    <h5>CLIENTS REVIEW</h5>
                    <h2>My Testimonial</h2>
                </div>
                <div className="ClientsReview__carousel">
                    <div className="ClientsReview__carousel__slide" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                        {reviews.concat(reviews).map((review, index) => (
                            <div key={index} className="slide">
                                <img src={review.img} alt="" />
                                <div className="row">
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}  ></i>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}  ></i>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}  ></i>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}  ></i>
                                </div>
                                <h4>{review.author}</h4>
                                <span>Marketing Coordinator</span>
                                <div className="d-flex">
                                <p>{review.text}</p>
                                <i></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsReview;
