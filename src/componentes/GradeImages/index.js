import React, { useEffect, useState } from 'react';
import './GradeImages.css'

const GradeImage = ({ gradeName }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Guerreiro':
        return '/imagens/guerreiro.png'; 
      case 'Mago':
        return '/imagens/mago.png';
      case 'Bárbaro':
        return '/imagens/barbaro.png';
      case 'Arqueiro':
        return '/imagens/arqueiro.png';
      case 'Ladrão':
        return '/imagens/ladrao.png';
      case 'Clérigo':
        return '/imagens/clerigo.png';
      case 'Necromante':
        return '/imagens/necromante.png';
      case 'Druida':
        return '/imagens/druida.png';
      case 'Bardo':
        return '/imagens/bardo.png';
      case 'Assassino':
        return '/imagens/assassino.png';
      default:
        return ''; 
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 700);
      };

      window.addEventListener('resize', handleResize);


      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`gradeImage ${isMobile ? 'mobile-gradeImage' : ''}`}>
      <img src={getImage(gradeName)} alt={gradeName} />
    </div>
  );
};

export default GradeImage;
