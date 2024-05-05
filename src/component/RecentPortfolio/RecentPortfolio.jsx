import React from 'react'
import "./RecentPortfolio.scss"
const RecentPortfolio = () => {
    return (
        <section className='RecentPortfolio'>
            <div className="container">
                <div className="head">
                    <h5>MY RECENT PORTFOLIO</h5>
                    <h2>Elevate your brand to new <br />
                        heights with our portfolio expertise</h2>
                </div>
            
            <div className="RecentPortfolio">
                <div className="RecentPortfolio__cards row">
                    <div className="col-8">
                        <div className="RecentPortfolio__cards__card">
                            <img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="" />
                            <div className="overlay">
                                    <h4>sheet metal bending</h4>
                                    <p>youtube</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="RecentPortfolio__cards__card">
                            <img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="" />
                            <div className="overlay">
                                    <h4>sheet metal bending</h4>
                                    <p>youtube</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="RecentPortfolio__cards__card">
                            <img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="" />
                            <div className="overlay">
                                    <h4>sheet metal bending</h4>
                                    <p>youtube</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="RecentPortfolio__cards__card">
                            <img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="" />
                            <div className="overlay">
                                    <h4>sheet metal bending</h4>
                                    <p>youtube</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default RecentPortfolio