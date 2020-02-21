import React from 'react';
import SpellBook from '../components/SpellBook';

const MainContainer = ({spells}) => {
  return (
    <SpellBook
      spells={spells}
    />
  )
}

export default MainContainer;
