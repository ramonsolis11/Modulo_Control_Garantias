// App.js
import React from 'react';
import LotList from './components/LotList';
import LotDetails from './components/LotDetails';

const App = () => {
  const mockLots = [
    { id: 1, name: 'Lote 1' },
    { id: 2, name: 'Lote 2' },
    // Agrega más lotes aquí
  ];

  const selectedLot = mockLots[0]; // Seleccionamos el primer lote para los detalles

  return (
    <div>
      <LotList lots={mockLots} />
      <LotDetails lot={selectedLot} />
    </div>
  );
};

export default App;
