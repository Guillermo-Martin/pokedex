import React from 'react';

function Pokecard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} />
      <h2>Type: {props.type}</h2>
      <h2>Experience: {props.base_experience}</h2>
    </div>
  );
}

export default Pokecard;