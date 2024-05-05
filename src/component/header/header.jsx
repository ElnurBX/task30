import React, { useState } from 'react';
import './header.scss';
import Dropdown from '../dropdown/dropdawn';
import AccordionMenu from '../acordionMenu/acordionMenu';

const Header = () => {
    const [open, setOpen] = useState(false);

    const changerMode = () => {
        setOpen(!open);
    };

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="https://zyan.vercel.app/images/logo.png" alt="logo" />
                </div>
                <div>
                    <Dropdown />
                </div>
                <div className="AccordionMenu">
                    <button onClick={changerMode}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
                <AccordionMenu 
                    className={` ${open ? 'accordionMenuOn' : ''}`} 
                    changerMode={changerMode} 
                />
        </header>
    );
};

export default Header;
