import React from 'react';
import './SpellBook.css';
import SpellCard from './SpellCard';

const SpellBook = ({spells}) => {

  const spellCards = spells.map((s, id) => (
    <SpellCard
      key={id}
      spellName={s.spell}
      spellType={s.type}
      spellEffect={s.effect}
    />
  ))

  return (
    <>
      <h1 className="heading">Spell Book</h1>
      {spellCards}
    </>
  );
};

export default SpellBook;
