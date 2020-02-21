import React from 'react';
import NavBar from '../components/NavBar';
import CharacterList from '../components/CharacterList';
import SpellBook from '../components/SpellBook';

const MainContainer = ({characters, spells}) => {
  return (
    <>
      <NavBar
      />
      <CharacterList
        characters={characters}
      />
      <SpellBook
        spells={spells}
      />
    </>
  )
}

export default MainContainer;
