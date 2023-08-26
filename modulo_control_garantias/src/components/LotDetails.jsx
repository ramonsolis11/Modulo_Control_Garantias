import React from 'react';

const LotDetails = ({ lot }) => {
    return (
        <div>
            <h2>Detalles del Lote</h2>
            <p>Nombre del Lote: {lot.nombreCliente}</p>
            <p>Fecha de Otorgamiento: {lot.fechaOtorgada}</p>
            <p>Fecha de Vencimiento: {lot.fechaVencimiento}</p>
            {/* Agrega más detalles aquí según tus necesidades */}
        </div>
    );
};

export default LotDetails;