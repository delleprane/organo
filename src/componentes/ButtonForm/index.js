import React, { useState, useEffect } from 'react';
import './ButtonForm.css'

const ButtonForm = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <button className={`button ${isMobile ? 'mobile-button' : ''}`}>
            {props.children}
        </button>
    )
}

export default ButtonForm