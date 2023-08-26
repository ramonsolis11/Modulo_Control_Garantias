import React, { useState } from 'react';
import LotList from './components/LotList';
import LotDetails from './components/LotDetails';

const App = () => {
  const [selectedLot, setSelectedLot] = useState(null);

  const handleLotSelect = (lot) => {
    setSelectedLot(lot);
  };

  // Ejemplo de datos simulados de lotes
  const mockLots = [
    { id: 1, name: 'Lote 1', /* otros campos */ },
    { id: 2, name: 'Lote 2', /* otros campos */ },
    { id: 3, name: 'Lote 3', /* otros campos */ },
    // Agrega más lotes aquí
  ];

  return (
    <div>
      <LotList lots={mockLots} onSelectLot={handleLotSelect} />
      {selectedLot && <LotDetails lot={selectedLot} />}
    </div>
  );
};

export default App;

