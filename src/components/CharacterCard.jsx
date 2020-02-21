import React from 'react';
import './CharacterCard.css'

const CharacterCard = ({  characterName,
                          characterRole,
                          characterHouse,
                          characterSchool,
                          characterAlias,
                          characterAnimagus,
                          characterBoggart,
                          characterPatronus,
                          characterWand,
                          characterBloodStatus,
                          characterSpecies}) => {

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
              <tr className={(characterAlias) ? "show" : "hide"}>
                <th>Alias:</th>
                <td>{characterAlias}</td>
              </tr>
              <tr className={(characterAnimagus) ? "show" : "hide"}>
                <th>Animagus:</th>
                <td>{characterAnimagus}</td>
              </tr>
              <tr className={(characterBoggart) ? "show" : "hide"}>
                <th>Boggart:</th>
                <td>{characterBoggart}</td>
              </tr>
              <tr className={(characterPatronus) ? "show" : "hide"}>
                <th>Patronus:</th>
                <td>{characterPatronus}</td>
              </tr>
              <tr className={(characterWand) ? "show" : "hide"}>
                <th>Wand:</th>
                <td>{characterWand}</td>
              </tr>
              <tr className={(characterBloodStatus) ? "show" : "hide"}>
                <th>Blood Status:</th>
                <td>{characterBloodStatus}</td>
              </tr>
              <tr className={(characterSpecies) ? "show" : "hide"}>
                <th>Species:</th>
                <td>{characterSpecies}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
