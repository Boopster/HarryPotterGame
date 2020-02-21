import React from 'react';
import './CharacterList.css';
import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {

  const characterCards = characters.map((c, id) => (
    <CharacterCard
      key={id}
      characterName={c.name}
    />
  ))

  return (
    <>
      <h1 className="heading">Character List</h1>
      {characterCards}
    </>
  );
};

export default CharacterList;