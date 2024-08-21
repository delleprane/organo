import { useState } from 'react';
import Banner from './componentes/Banner';
import Team from './componentes/Team';
import Form from './componentes/Form';
import Footer from './componentes/Footer';

function App() {
  const guilds = [
    { name: 'Ordem dos Cavaleiros Dourados', firstColor: '#D9534F', secondColor: '#F8E5E5' },
    { name: 'Guilda dos Ladrões das Sombras', firstColor: '#7158E2', secondColor: '#EBE5F8' },
    { name: 'Magos do Círculo Arcano', firstColor: '#D9534A', secondColor: '#F7E9E5' },
    { name: 'Clã dos Bárbaros de Ferro', firstColor: '#47A84D', secondColor: '#E6F5E5' },
    { name: 'Mercenários de Sangue Frio', firstColor: '#D9654D', secondColor: '#F8E9E0' },
    { name: 'Protetores da Floresta Verdejante', firstColor: '#3CBAB8', secondColor: '#E5F8F6' },
    { name: 'Templários do Sol Nascente', firstColor: '#9C58B5', secondColor: '#F8E5F8' },
    { name: 'Exploradores do Abismo', firstColor: '#3FAE60', secondColor: '#E6F8E8' },
    { name: 'Caçadores de Dragões de Valéria', firstColor: '#E6B842', secondColor: '#F8F4E5' },
    { name: 'Irmandade dos Assassinos Silenciosos', firstColor: '#6E6E6E', secondColor: '#E8E8E8' }
  ];

  const grades = [
    'Guerreiro', 'Mago', 'Bárbaro', 'Arqueiro', 'Ladrão',
    'Clérigo', 'Necromante', 'Druida', 'Bardo', 'Assassino'
  ];

  const [characters, setCharacters] = useState([]);

  const addNewCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div className="App">
      <Banner />
      <Form grades={grades} RegisteredCharacter={character => addNewCharacter(character)} title="Preencha os dados para criar o card do personagem." />
      {guilds.map(guild => (
        <Team
          key={guild.name}
          name={guild.name}
          firstColor={guild.firstColor}
          secondColor={guild.secondColor}
          characters={characters.filter(character => character.guild === guild.name)}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
