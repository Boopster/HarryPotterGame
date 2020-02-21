import React from 'react';
import './CharacterCard.css'

const CharacterCard = ({characterName}) => {
  return (
    <>
      <div className="character-card">
        <div className="character-title">
          <h2>{characterName}</h2>
        </div>

          <div className="type"></div>
          <div className="type-description"></div>

      </div>
    </>
  );
};

export default CharacterCard;
