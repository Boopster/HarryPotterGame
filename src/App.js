import React, {useState, useEffect} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

const App = () => {

  const [spells, setSpells] = useState([]);
  const [characters, setCharacters] = useState([]);

  const apiKey = "$2a$10$5hVrOiNsBOXzJJPVC/2ezO.jZuak761zLWtJDiZQzIuY3VOV9Z.Q2"

  const urlSpells = `https://www.potterapi.com/v1/spells?key=${apiKey}`;
  const urlCharacters = `https://www.potterapi.com/v1/characters?key=${apiKey}`;

  const loadSpellsData = async () => {
    const response = await fetch(urlSpells);
    const spellsData = await response.json();
    setSpells(spellsData);
    console.log(spellsData);
  }

  const loadCharactersData = async () => {
    const response = await fetch(urlCharacters);
    const charactersData = await response.json();
    setCharacters(charactersData);
    console.log(charactersData);
  }

  useEffect(() => {
    loadCharactersData();
    loadSpellsData();
  }, []);

  return (
    <MainContainer
      characters={characters}
      spells={spells}
    />
  );
};

export default App;
