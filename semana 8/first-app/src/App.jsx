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