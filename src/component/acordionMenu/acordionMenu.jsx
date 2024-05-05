
import React from 'react';
import './acordionMenu.scss';

const AccordionMenu = ({ changerMode ,className}) => {
    return (
        <React.Fragment >
        <div className={className}>
            <div className="accordion__content" >
                    <div className="accordion__content__head">
                        <img src="https://zyan.vercel.app/images/logo2.png" alt="logo" />
                        <button onClick={changerMode}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="accordion__content__about">
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                    </div>
                    <div className="accordion__content__form">
                        <h3>GET IN TOUCH</h3>
                        <form action="">
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email'/>
                            <textarea placeholder='Message' cols="30" rows="3"></textarea>
                            <button type='submit'> Submit</button>
                        </form>
                    </div>
            </div>
            <div onClick={changerMode} className="accordion__overlay"></div>
            </div>
        </React.Fragment>
    );
};

export default AccordionMenu;
