import { useState } from "react";

function Form({ onAddMusica }) {
  const [genero, setGenero] = useState("");
  const [artista, setArtista] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (genero.trim().length < 3 || genero.trim().startsWith(' ') || artista.trim().length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setErrorMessage('');
      setShowCard(true);
      onAddMusica({ genero, artista });
      setGenero("");
      setArtista("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Género Favorito:
        <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Artista Favorito:
        <input type="text" value={artista} onChange={(e) => setArtista(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Enviar</button>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <p>Información enviada correctamente.</p>}
    </form>
  );
}

export default Form;







