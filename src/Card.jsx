import React from 'react';

function Card({ musicas }) {
  return (
    <div>
      <h2> Musica </h2>
      {musicas.map((musica, index) => (
        <div key={index} className="card">
          <h3>{musica.genero} {musica.artista}</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
