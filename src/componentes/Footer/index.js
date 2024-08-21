import React, { useState, useEffect } from 'react';
import "./Footer.css"

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`footer-site ${isMobile ? 'mobile-footer-site' : ''}`}>
            <div className='container'>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/fernanda-delleprane/' target="_blank" rel="noopener noreferrer">
                        <img src='/imagens/linkedin-icon.png' alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/delleprane' target="_blank" rel="noopener noreferrer">
                        <img src='/imagens/repository-icon.png' alt="GitHub Repository" />
                    </a>
                </div>
                <div className='logo'>
                    <img src='/imagens/logo.png' alt="Logo" />
                </div>
                <div className='owner'>
                    <h4>Fernanda Delleprane</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;
