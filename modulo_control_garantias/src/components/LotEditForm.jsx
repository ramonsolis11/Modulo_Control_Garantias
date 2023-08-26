import React, { useState } from 'react';
import axios from 'axios';

const LotEditForm = ({ lot }) => {
    const [editedLot, setEditedLot] = useState({
        fechaOtorgada: lot.fechaOtorgada,
        nombreCliente: lot.nombreCliente,
        centroCosto: lot.centroCosto,
        // Otros campos del formulario
    });

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/lots/${lot._id}`, editedLot);
            console.log(response.data); // Mensaje de éxito desde el backend
            // Restablece el formulario
            setEditedLot({
                fechaOtorgada: '',
                nombreCliente: '',
                centroCosto: '',
                // Restablece otros campos
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleEditSubmit}>
            <h3>Editar Lote</h3>
            <label>
                Fecha Otorgada:
                <input
                    type="date"
                    value={editedLot.fechaOtorgada}
                    onChange={(e) =>
                        setEditedLot({ ...editedLot, fechaOtorgada: e.target.value })
                    }
                />
            </label>
            <label>
                Nombre del Cliente:
                <input
                    type="text"
                    value={editedLot.nombreCliente}
                    onChange={(e) =>
                        setEditedLot({ ...editedLot, nombreCliente: e.target.value })
                    }
                />
            </label>

            <label>
                Centro de Costo:
                <input
                    type="text"
                    value={editedLot.centroCosto}
                    onChange={(e) =>
                        setEditedLot({ ...editedLot, centroCosto: e.target.value })
                    }
                />
            </label>
            {/* Otros campos del formulario */}
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default LotEditForm;
