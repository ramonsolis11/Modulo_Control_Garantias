import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LotReception = () => {
    const [receivedLots, setReceivedLots] = useState([]);

    useEffect(() => {
        // Obtener los lotes recibidos desde el backend
        async function fetchReceivedLots() {
            try {
                const response = await axios.get('/api/lots/received');
                setReceivedLots(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReceivedLots();
    }, []);

    const handleAccept = async (lotId) => {
        try {
            await axios.post(`/api/lots/${lotId}/accept`);
            // Actualizar el estado local de los lotes después de aceptar
            setReceivedLots((prevLots) =>
                prevLots.map((lot) =>
                    lot._id === lotId ? { ...lot, estado: 'aceptado' } : lot
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const handleReject = async (lotId) => {
        try {
            await axios.post(`/api/lots/${lotId}/reject`);
            // Actualizar el estado local de los lotes después de rechazar
            setReceivedLots((prevLots) =>
                prevLots.map((lot) =>
                    lot._id === lotId ? { ...lot, estado: 'rechazado' } : lot
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Lotes Recibidos</h2>
            <ul>
                {receivedLots.map((lot) => (
                    <li key={lot._id}>
                        Número Correlativo: {lot.numeroCorrelativo}
                        <br />
                        Centro de Costo: {lot.centroCosto}
                        <br />
                        Estado: {lot.estado}
                        <button onClick={() => handleAccept(lot._id)}>Aceptar</button>
                        <button onClick={() => handleReject(lot._id)}>Rechazar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LotReception;
