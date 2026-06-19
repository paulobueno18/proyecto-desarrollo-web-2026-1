import React from 'react';
import Header from './components/header';

export default function App() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px' }}>  
      <Header
        titulo="Mi primera app con React + Vite"
        subtitulo="Probando el paso de propiedad (props) en tiempo real"
        totalItems={1}
        />
    </div>
  );
}

//ejemplo 2
import React from 'react';
import Header from './components/cards';
import Usercard from './components/cards';

export default function App() {
  return(
    <div style= {{ maxwidth: "600px" , marign: "0 auto" , padding:"20px" }}>
      <h1>Lista de Desarrolladores</h1>
    <Usercard name= "paulo bueno" email="22221036@unamad.edu.pe" compania="UNAMAD" />
    <Usercard name= "cesar bueno" email="cesarbue@unamad.edu.pe" compania="UNAMAD" />
    </div>
  )
}

import React from 'react';
import { contador } from './components/contador';

const App = () => {
  return (
    <div style= {{maxwidth: "600px" , margin: "0 aunto" , padding: "20px"}}>
      <h1>Contador</h1>
      <hr />
      <Contador/>
    </div>
  )
}

export default  app

import React from 'react';
import { Interruptor } from "./components/luz alternable"

const app = () => {
  return (
    <div style={{padding: "15px" , margin: "10px"}}>
      <h3>Interruptor</h3>
      <Interruptor/>
    </div>
  )
}

export default App;

