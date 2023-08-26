import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LotList = () => {
    const [lots, setLots] = useState([]);
    const [selectedLot, setSelectedLot] = useState(null);

    useEffect(() => {
        fetchLots();
    }, []);

    const fetchLots = async () => {
        try {
            const response = await axios.get('/api/lots');
            setLots(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLotClick = (lot) => {
        setSelectedLot(lot);
    };

    return (
        <div>
            <h2>Lista de Lotes</h2>
            <ul>
                {lots.map((lot) => (
                    <li key={lot._id} onClick={() => handleLotClick(lot)}>
                        {lot.nombreCliente}
                    </li>
                ))}
            </ul>
            {selectedLot && (
                <div>
                    <h3>Detalles del Lote</h3>
                    <p>Nombre del Lote: {selectedLot.nombreCliente}</p>
                    <p>Fecha Otorgada: {selectedLot.fechaOtorgada}</p>
                    <p>Centro de Costo: {selectedLot.centroCosto}</p>
                    <p>Cantidad de Garantías: {selectedLot.garantias.length}</p>
                    <h4>Garantías:</h4>
                    <ul>
                        {selectedLot.garantias.map((garantia, index) => (
                            <li key={index}>
                                Tipo: {garantia.tipo}, Documentos: {garantia.documentos.join(', ')}
                            </li>
                        ))}
                    </ul>
                    <p>Contrato: {selectedLot.contrato ? 'Sí' : 'No'}</p>
                    <p>Pagare: {selectedLot.pagare ? 'Sí' : 'No'}</p>
                    <p>Nombre Asesor: {selectedLot.nombreAsesor}</p>
                    <p>Fecha de Envío: {selectedLot.fechaEnvio}</p>
                    <p>Nombre de Quien Creó el Lote: {selectedLot.nombreCreador}</p>
                </div>
            )}
        </div>
    );
};

export default LotList;