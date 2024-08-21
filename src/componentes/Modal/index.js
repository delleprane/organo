import React, { useState, useEffect } from 'react';
import GradeImage from '../GradeImages';
import './Modal.css';

const Modal = ({ isOpen, onClose, character }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isMobile ? 'mobile-modal-overlay' : ''}`}>
            <div className='exit' onClick={onClose}>
                <img src="/imagens/exit.png" alt="exit-icon" />
            </div>
            <div className='title' style={{ backgroundColor: character.secondColor }}>
                <h2 style={{ borderColor: character.firstColor }}>{character.grade}</h2>
                <div className='images'>
                    <div className="image-container">
                        <img src={character.img} alt={character.name} className='image-character' />
                        <GradeImage gradeName={character.grade} />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <h4><span className="label" style={{ color: character.firstColor }}>Nome:</span> {character.name}</h4>
                <h4><span className="label" style={{ color: character.firstColor }}>Guilda / Facção:</span> {character.guild}</h4>
                <h4><span className="label" style={{ color: character.firstColor }}>Raça:</span> {character.race}</h4>
                <h4><span className="label" style={{ color: character.firstColor }}>Informações adicionais:</span></h4>
                {character.info ? (
                    <ul className='infos' style={{ borderColor: character.secondColor }}>
                        {character.info.split('\n').map((infoPart, index) => (
                            <li key={index}>{infoPart}</li>
                        ))}
                    </ul>
                ) : (
                    <span>Sem Informações adicionais</span>
                )}
            </div>
        </div>
    );
};

export default Modal;
