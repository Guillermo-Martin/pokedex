import React from 'react';
import './../assets/styles.css';

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={props.image} className="Pokecard-img" />
      <h4>Type: {props.type}</h4>
      <h4>Experience: {props.base_experience}</h4>
    </div>
  );
}

export default Pokecard;