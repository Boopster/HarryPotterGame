import React from 'react';
import './SpellCard.css'

const SpellCard = ({spellName, spellType, spellEffect}) => {
  return (
    <>
      <div className="spell-card">
        <div className="spell-title">
          <h2>{spellName}</h2>
        </div>
        <div className="spell-image">
          <img src={require(`../images/${spellType}.png`)} height="128" width="128" alt={spellType}/>
        </div>
        <div className="spell-details">
          <div className="type"><p>Type:</p></div>
          <div className="type-description"><p>{spellType}</p></div>
          <div className="effect"><p>Effect:</p></div>
          <div className="effect-description"><p>{spellEffect}</p></div>
        </div>
      </div>
    </>
  );
};

export default SpellCard;
