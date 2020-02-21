import React from 'react';
import SortingHat from '../components/SortingHat';
import CharacterList from '../components/CharacterList';
import SpellBook from '../components/SpellBook';

const MainContainer = ({house, chooseHouse, characters, spells}) => {

  return (
    <>
      <SortingHat
        house={house}
        chooseHouse={chooseHouse}
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
