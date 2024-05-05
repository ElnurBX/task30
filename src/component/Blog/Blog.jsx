import React from 'react'
import "./Blog.scss"
const Blog = () => {
return (
    <section className='Blog'>
        <div className="container">
            <div className="head row">
                <div className="text">
                    <h5>MY BLOG</h5>
                    <h2>Unlocking the potential of your <br /> personal brand</h2>
                </div>
                <button>More Blog +</button>
            </div>
            <div className="Blog__cards row">
                <div className="Blog__cards__card col-4">
                    <div className="Blog__cards__card__img">
                        <img src="https://zyan.vercel.app/images/blog/1.jpg" alt="" />
                    </div>
                    <div className="Blog__cards__card__time">
                        <span>31 December,2022</span>
                    </div>
                    <div className="Blog__cards__card__description ">
                        <div className="row">
                            <span><i class="fa-solid fa-user"></i>By admin</span>
                            <span><i class="fa-solid fa-comments"></i>Comments (05)</span>
                        </div>
                        <h4>The standard personal My portfolio</h4>
                    </div>
                </div>
                <div className="Blog__cards__card col-4">
                    <div className="Blog__cards__card__img">
                        <img src="https://zyan.vercel.app/images/blog/2.jpg" alt="" />
                    </div>
                    <div className="Blog__cards__card__time">
                        <span>31 December,2022</span>
                    </div>
                    <div className="Blog__cards__card__description ">
                        <div className="row">
                            <span><i class="fa-solid fa-user"></i>By admin</span>
                            <span><i class="fa-solid fa-comments"></i>Comments (05)</span>
                        </div>
                        <h4>The standard personal My portfolio</h4>
                    </div>
                </div>
                <div className="Blog__cards__card col-4">
                    <div className="Blog__cards__card__img">
                        <img src="https://zyan.vercel.app/images/blog/3.jpg" alt="" />
                    </div>
                    <div className="Blog__cards__card__time">
                        <span>31 December,2022</span>
                    </div>
                    <div className="Blog__cards__card__description ">
                        <div className="row">
                            <span><i class="fa-solid fa-user"></i>By admin</span>
                            <span><i class="fa-solid fa-comments"></i>Comments (05)</span>
                        </div>
                        <h4>The standard personal My portfolio</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Blog