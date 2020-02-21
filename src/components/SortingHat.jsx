import React from 'react';
import './SortingHat.css';

const SortingHat = ({house, chooseHouse}) => {
  return (
    <>
      <div className="sorting-hat">
        <h1 className="heading">Sorting Hat</h1>
        <img src={require("../images/sorting-hat.png")} height="512" width="512" alt="sorting hat"/>
        <h2 className="house">{house}</h2>
        <button onClick={chooseHouse}>Get House</button>
      </div>
    </>
  );
};

export default SortingHat;
