import React, { useState, useEffect } from 'react';
import "./Dropdown.css"

const Dropdown = ({ items, label, placeholder, required, value, changed }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`dropdown ${isMobile ? 'mobile-dropdown' : ''}`}>
            <label>{label}</label>
            <select onChange={event => changed(event.target.value)} required={required} value={value}>
                <option value="" disabled>{placeholder}</option>
                {items.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Dropdown;
