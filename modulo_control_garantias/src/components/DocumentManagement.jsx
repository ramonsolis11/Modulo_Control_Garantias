import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qrcode-logo';

const DocumentManagement = () => {
    const [documents, setDocuments] = useState([]);
    const [showBarcode, setShowBarcode] = useState(false);
    const [barcodeData, setBarcodeData] = useState('');

    useEffect(() => {
        fetchDocuments();
    }, []);

    const fetchDocuments = async () => {
        try {
            const response = await axios.get('/api/documents');
            setDocuments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGenerateBarcode = (docId) => {
        // Aquí podrías obtener el documento con el docId y generar el código de barras
        const document = documents.find((doc) => doc._id === docId);
        if (document) {
            const barcodeData = `${document.nombre}-${document._id}`; // Datos para el código de barras
            setShowBarcode(true);
            setBarcodeData(barcodeData);
        }
    };

    const handleRegisterExit = async (docId) => {
        try {
            // Aquí podrías implementar la lógica para registrar una salida
            await axios.post(`/api/documents/${docId}/register-exit`);
            // Después de registrar la salida, actualiza la lista de documentos
            fetchDocuments();
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegisterEntry = async (docId) => {
        try {
            // Aquí podrías implementar la lógica para registrar una entrada
            await axios.post(`/api/documents/${docId}/register-entry`);
            // Después de registrar la entrada, actualiza la lista de documentos
            fetchDocuments();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Manejo de Documentos en el Almacén</h2>
            <ul>
                {documents.map((doc) => (
                    <li key={doc._id}>
                        Nombre del Documento: {doc.nombre}
                        <br />
                        Estado: {doc.estado}
                        <button onClick={() => handleGenerateBarcode(doc._id)}>Generar Código de Barras</button>
                        {showBarcode && <QRCode value={barcodeData} />} {/* Muestra el código de barras si showBarcode es true */}
                        <button onClick={() => handleRegisterExit(doc._id)}>Registrar Salida</button>
                        <button onClick={() => handleRegisterEntry(doc._id)}>Registrar Entrada</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentManagement;