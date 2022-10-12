import React from "react";
import '../stylesheets/boton.css';
function Boton({texto, botonClic, manejarClic}){
    return(
      <button className={ botonClic ? 'boton-clic' : 'boton-reset' }
      onClick={manejarClic}>
        {texto} 
      </button>
    );
}

export default Boton;