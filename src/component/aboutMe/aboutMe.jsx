import React from 'react'
import "./aboutMe.scss"
const aboutMe = () => {
return (
    <section className='AboutMe'>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <h5>ABOUT ME</h5>
                    <h2>Transforming visions into exceptional portfolios</h2>
                    <div className="description">
                        <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                        <button>
                                Download CV <i className="fa-solid fa-download"></i>
                        </button>
                    </div>
                </div>
                <div className="col-4">
                    <div className="AboutMe__img">
                        <img src="https://zyan.vercel.app/images/about_img.jpg" alt="" />
                        <div className="daily">
                            <div className="icon">
                            <i class="fa-solid fa-chart-pie"></i>
                            </div>
                            <div className="">
                            <h5>Daily Activity</h5>
                            <p>Loream is ispam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default aboutMe