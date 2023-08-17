import { useState } from 'react'
import Form from './Form';
import Card from './Card';
import './App.css'

function App() {

 const [musicas,setMusicas]=useState([]);

  const addMusica = (musica) => {
    setMusicas([...musicas,musica]);
    console.log(musicas)
  };
  
  return (
   <div className=" App ">
      <h1> Formulario de Musica!! </h1>
      <Form onAddMusica={addMusica}/>
      <Card musicas={musicas}/>
      
   </div>
  );
}

export default App