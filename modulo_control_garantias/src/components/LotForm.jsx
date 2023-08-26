import React, { useState } from 'react';
import axios from 'axios';

const LotForm = () => {
    const [formData, setFormData] = useState({
        fechaOtorgada: '',
        nombreCliente: '',
        centroCosto: '',
        // Otros campos del formulario
    });

    const [prestamos, setPrestamos] = useState([]); // Lista de préstamos en el lote

    const handleAddPrestamo = () => {
        const newPrestamo = {
            tipoGarantia: '',
            descripcionGarantia: '',
            // Otros campos del préstamo
        };
        setPrestamos([...prestamos, newPrestamo]);
    };

    const handlePrestamoChange = (index, field, value) => {
        const updatedPrestamos = [...prestamos];
        updatedPrestamos[index][field] = value;
        setPrestamos(updatedPrestamos);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aquí debes enviar formData y prestamos al backend para crear el lote
            const response = await axios.post('/api/lots', { ...formData, prestamos });
            console.log(response.data); // Mensaje de éxito desde el backend
            // Restablece el formulario y la lista de préstamos
            setFormData({
                fechaOtorgada: '',
                nombreCliente: '',
                centroCosto: '',
                // Restablece otros campos
            });
            setPrestamos([]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ... Campos existentes ... */}
            
            {/* Agregar préstamos */}
            <h3>Agregar Préstamo</h3>
            <button type="button" onClick={handleAddPrestamo}>
                Agregar Préstamo
            </button>
            {prestamos.map((prestamo, index) => (
                <div key={index}>
                    <label>Tipo de Garantía:</label>
                    <input
                        type="text"
                        value={prestamo.tipoGarantia}
                        onChange={(e) => handlePrestamoChange(index, 'tipoGarantia', e.target.value)}
                    />

                    <label>Descripción de Garantía:</label>
                    <input
                        type="text"
                        value={prestamo.descripcionGarantia}
                        onChange={(e) => handlePrestamoChange(index, 'descripcionGarantia', e.target.value)}
                    />
                    {/* Agrega más campos del préstamo aquí según tus necesidades */}
                </div>
            ))}
            
            {/* ... Otros campos del formulario ... */}
            
            <button type="submit">Enviar Lote</button>
        </form>
    );
};

export default LotForm;