import React, { useState, useEffect, useRef } from 'react';
import './brand.scss';

const Brand = () => {
    const fullText = 'PHP * Python * design * world * Development ';
    const [currentText, setCurrentText] = useState(fullText.slice(0, 30));
    const intervalRef = useRef(null); 

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setCurrentText((prevText) => {
                    const nextText = prevText.slice(1) + prevText[0];
                    return nextText;
                });
            }, 100);
        };
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleMouseEnter = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        intervalRef.current = setInterval(() => {
            setCurrentText((prevText) => {
                const nextText = prevText.slice(1) + prevText[0];
                return nextText;
            });
        }, 100);
    };

    return (
        <section
            className='brand'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="brand-text">
                {currentText}
            </div>
        </section>
    );
};

export default Brand;
