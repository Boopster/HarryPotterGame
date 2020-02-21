import React from 'react';
import './CharacterCard.css'

const CharacterCard = ({characterName, characterRole, characterHouse, characterSchool}) => {

  return (
    <>
      <div className="character-card">
        <div className="character-title">
          <h2>{characterName}</h2>
        </div>
        <div className="description">
          <table>
            <tbody>
              <tr className={(characterRole) ? "show" : "hide"}>
                <th>Role:</th>
                <td>{characterRole}</td>
              </tr>
              <tr className={(characterHouse) ? "show" : "hide"}>
                <th>House:</th>
                <td>{characterHouse}</td>
              </tr>
              <tr className={(characterSchool) ? "show" : "hide"}>
                <th>School:</th>
                <td>{characterSchool}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
