// components/LotDetails.js
import React from 'react';

const LotDetails = ({ lot }) => {
    return (
        <div>
        <h2>Detalles del Lote</h2>
        <p>Nombre del Lote: {lot.name}</p>
        {/* Agrega más detalles aquí según tus necesidades */}
        </div>
    );
};

export default LotDetails;
