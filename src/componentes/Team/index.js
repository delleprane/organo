import React, { useState, useEffect } from 'react';
import CardCaracter from '../CardCharacter'
import './Team.css'

const Team = ({ characters, name, firstColor, secondColor }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        characters.length > 0 && <section className={`team ${isMobile ? 'mobile-team' : ''}`} style={{ backgroundColor: secondColor, }}>
            <h3 style={{ borderColor: firstColor }}>{name}</h3>
            <div className='characters'>
                {characters.map(character => <CardCaracter key={character.name} name={character.name} guild={character.guild} race={character.race} grade={character.grade} img={character.imagem} firstColor={firstColor} secondColor={secondColor} info={character.info} />)}
            </div>
        </section>
    )
}

export default Team