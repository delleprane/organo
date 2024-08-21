import React, { useState, useEffect } from 'react';
import './Form.css';
import TextFild from "../TextFild";
import Dropdown from '../Dropdown';
import Button from '../ButtonForm';

const Form = ({ title, RegisteredCharacter, grades }) => {
  const races = [
    "Humano", "Elfo", "Anão", "Orc", "Meio-Elfo", "Halfling",
    "Gnomo", "Tiefling", "Draconato", "Drow (Elfo Negro)",
    "Goblin", "Troll", "Centauro", "Minotauro", "Vampiro", "Lich"
  ];

  const guilds = [
    "Ordem dos Cavaleiros Dourados", "Guilda dos Ladrões das Sombras",
    "Magos do Círculo Arcano", "Clã dos Bárbaros de Ferro",
    "Mercenários de Sangue Frio", "Protetores da Floresta Verdejante",
    "Templários do Sol Nascente", "Exploradores do Abismo",
    "Caçadores de Dragões de Valéria", "Irmandade dos Assassinos Silenciosos"
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [imagem, setImagem] = useState('');
  const [guild, setGuild] = useState('');
  const [race, setRace] = useState('');
  const [info, setInfo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    

    RegisteredCharacter({ name, grade, imagem, guild, race, info });

 
    setName('');
    setGrade('');
    setImagem('');
    setGuild('');
    setRace('');
    setInfo(''); 
  };

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <section className={`web-form ${isMobile ? 'mobile-form' : ''}`}>
      <form onSubmit={onSubmit}> 
        <h2>{title}</h2>
        <TextFild
          placeholder="Digite o Nome do personagem"
          title="Nome do personagem"
          required={true}
          value={name} 
          changed={setName}
        />
        <Dropdown
          items={grades}
          label='Classe do personagem'
          placeholder='Selecione uma classe'
          required={true}
          value={grade}
          changed={setGrade}
        />
        <TextFild
          placeholder="Digite o endereço da imagem"
          title="Imagem do personagem"
          required={true}
          value={imagem}
          changed={setImagem}
        />
        <Dropdown
          items={guilds}
          label='Guilda / Facção do personagem'
          placeholder='Selecione uma Guilda / Facção'
          required={true}
          value={guild}
          changed={setGuild}
        />
        <Dropdown
          items={races}
          label='Raça do personagem'
          placeholder='Selecione uma Raça'
          required={true}
          value={race}
          changed={setRace}
        />
        <TextFild
          placeholder="Digite informações adicionais Max. 10 linhas"
          title="Informações adicionais"
          required={false}
          multiline={true}
          value={info} 
          changed={setInfo}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
