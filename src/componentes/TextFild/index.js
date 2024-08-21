import React, { useState, useEffect } from 'react';
import './TextFild.css'

const TextFild = ({ placeholder, title, required, value, changed, multiline = false }) => {
    const typed = (event) => {
        changed(event.target.value);
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`textfield ${isMobile ? 'mobile-textfield' : ''}`}>
            <label>{title}</label>
            {multiline ? (
                <textarea
                    value={value}
                    onChange={typed}
                    placeholder={placeholder}
                    required={required}
                    rows={10}
                />
            ) : (
                <input
                    value={value}
                    onChange={typed}
                    type='text'
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    )
}

export default TextFild;
