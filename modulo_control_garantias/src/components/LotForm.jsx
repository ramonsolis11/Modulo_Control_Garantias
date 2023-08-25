// src/components/LotForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LotForm = () => {
    const [formData, setFormData] = useState({
        fechaOtorgada: '',
        nombreCliente: '',
        centroCosto: '',
        // Otros campos del formulario
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/api/lots', formData);
        console.log(response.data); // Mensaje de éxito desde el backend
        // Restablece el formulario
        setFormData({
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
        <form onSubmit={handleSubmit}>
        <label>
            Fecha Otorgada:
            <input
            type="date"
            value={formData.fechaOtorgada}
            onChange={(e) =>
                setFormData({ ...formData, fechaOtorgada: e.target.value })
            }
            />
        </label>
        {/* Otros campos del formulario */}
        <button type="submit">Enviar Lote</button>
        </form>
    );
};

export default LotForm;

