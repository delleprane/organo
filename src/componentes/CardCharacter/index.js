import React, { useState, useEffect } from 'react';
import './CardCharacter.css'
import Modal from '../Modal'

const CardCaracter = ({ name, grade, img, firstColor, race, guild,secondColor,info }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`cardCharacter ${isMobile ? 'mobile-cardCharacter' : ''}`} onClick={openModal}>
                <div className='top' style={{ backgroundColor: firstColor }}>
                    <img src={img} alt={name} />
                </div>
                <div className='footer'>
                    <h4 style={{color:firstColor}}>{name}</h4>
                    <h5>{race}</h5>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                character={{ name, grade, img, race, guild,secondColor,firstColor,info }}
            />
        </>
    )
}

export default CardCaracter