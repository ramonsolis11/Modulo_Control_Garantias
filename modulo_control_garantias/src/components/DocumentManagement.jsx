// src/components/DocumentManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentManagement = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        // Obtener los documentos desde el backend
        async function fetchDocuments() {
        try {
            const response = await axios.get('/api/documents');
            setDocuments(response.data);
        } catch (error) {
            console.error(error);
        }
        }

        fetchDocuments();
    }, []);

    // Implementa la lógica para generar códigos de barras, registrar salidas y entradas, etc.

    return (
        <div>
        <h2>Manejo de Documentos en el Almacén</h2>
        <ul>
            {documents.map((doc) => (
            <li key={doc._id}>
                Nombre del Documento: {doc.nombre}
                <br />
                Estado: {doc.estado}
                {/* Botones para generar código de barras, registrar salidas, etc. */}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default DocumentManagement;
