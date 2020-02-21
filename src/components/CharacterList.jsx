import React from 'react';
import './CharacterList.css';
import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {

  const characterCards = characters.map((c, id) => (
    <CharacterCard
      key={id}
      characterName={c.name}
      characterRole={c.role}
      characterHouse={c.house}
      characterSchool={c.school}
      characterAlias={c.alias}
      characterAnimagus={c.animagus}
      characterBoggart={c.boggart}
      characterPatronus={c.patronus}
      characterWand={c.wand}
      characterBloodStatus={c.bloodStatus}
      characterSpecies={c.species}
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
