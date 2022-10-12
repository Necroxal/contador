import './App.css';
import logo from './image/logo.png';
import Boton from './components/boton.jsx';
import Contador from './components/contador';
import {useState} from 'react';

function App() {
  
  const [numClics,setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1); 
  };
  const resetCount = () =>{
    setNumClics(0); 
  };
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='main-logo'
        src = {logo}
        alt='Main logo'/>
      </div>
     <div className='contenedor-principal'>
       <Contador
        numClics={numClics}
       />
       <Boton
        texto='Clic'
        botonClic={true}
        manejarClic={manejarClic}/>
       <Boton
        texto='Reset'
        botonClic={false}
        manejarClic={resetCount}/>
     </div>
    </div>
  );
}

export default App;
