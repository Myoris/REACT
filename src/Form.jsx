import { useState } from "react";

function Form({onAddMusica}){

    const [genero,setGenero]=useState("");
    const [artista,setArtista]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(genero);
        console.log(artista);
        if(genero && artista){
            onAddMusica({genero,artista});
            setGenero("");
            setArtista("");
        }
    }


    
    return (
    <form onSubmit={handleSubmit}>
        <label>
          Género Favorito:
        <input type="text"  value={genero} onChange={(e)=>setGenero(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Artista Favorito:
        <input type="text" value={artista} onChange={(e)=>setArtista(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit"> Enviar </button>        
    </form>
    
    )
    
}
export default Form;