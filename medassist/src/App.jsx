import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Galeria from './components/Galeria';
import Entregables from './components/Entregables';
import SobreNosotros from './components/SobreNosotros';

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <SobreNosotros />
      <Galeria />
      <Entregables />
      
    </div>
  );
}

export default App;
