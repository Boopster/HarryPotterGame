import React, {useState, useEffect} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

const App = () => {

  const [spells, setSpells] = useState([]);

  const apiKey = "$2a$10$5hVrOiNsBOXzJJPVC/2ezO.jZuak761zLWtJDiZQzIuY3VOV9Z.Q2"

  const urlSpells = `https://www.potterapi.com/v1/spells?key=${apiKey}`;

  const loadSpellsData = async () => {
    const response = await fetch(urlSpells);
    const spellsData = await response.json();
    setSpells(spellsData);
    console.log(spellsData);
  }

  useEffect(() => {
    loadSpellsData();
  }, []);

  return (
    <MainContainer
      spells={spells}
    />
  );
};

export default App;
