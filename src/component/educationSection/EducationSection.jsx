import React from 'react'
import "./EducationSection.scss"
const EducationSection = () => {
return (
    <section className='EducationSection'>
        <div className="container">
            <div className="head">
                <h5>EDUCATION & SKILL</h5>
                <h2>Showcasing your talent <br /> amplifying your impact</h2>
            </div>
            <div className="EducationSection__educards row">
                <div className="EducationSection__educards__card col-6">
                    <div className="EducationSection__educards__card__year">
                        2014 - 2018
                    </div>
                    <h3>Wordpress and End Developer</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                </div>
                <div className="EducationSection__educards__card col-6">
                        <div className="EducationSection__educards__card__year">
                        2012 - 2014
                        </div>
                        <h3>Python Developer</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                </div>
                <div className="EducationSection__educards__card col-6">
                    <div className="EducationSection__educards__card__year">
                    2005 - 2009
                    </div>
                    <h3>Kent State University</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                </div>
                <div className="EducationSection__educards__card col-6">
                    <div className="EducationSection__educards__card__year">
                    2009 - 2012
                    </div>
                    <h3>User Experience Design  </h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                </div>
            </div>
            <div className="EducationSection__skill row">
                <div className="EducationSection__skill__card ">
                    <span>HTML</span>
                    <div className="cardbar">

                    </div>
                </div>
                
                <div className="EducationSection__skill__card ">
                    <span>Python</span>
                    <div className="cardbar">
                        
                    </div>
                </div>
                
                <div className="EducationSection__skill__card ">
                    <span>CSS</span>
                    <div className="cardbar">
                        
                    </div>
                </div>
                
                <div className="EducationSection__skill__card ">
                    <span>Photoshop </span>
                    <div className="cardbar">
                        
                    </div>
                </div>
                
                <div className="EducationSection__skill__card ">
                    <span>Java Script   </span>
                    <div className="cardbar">
                        
                    </div>
                </div>
                
                <div className="EducationSection__skill__card ">
                    <span>Figma</span>
                    <div className="cardbar">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default EducationSection