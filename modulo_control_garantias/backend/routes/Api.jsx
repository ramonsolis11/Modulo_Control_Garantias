// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Ruta para obtener los documentos
router.get('/documents', async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos' });
    }
});


    // Ruta para registrar una salida de documento
    router.post('/documents/:id/salida', async (req, res) => {
        try {
            const updatedDocument = await Document.findByIdAndUpdate(req.params.id, {
                estado: 'fuera de almacén',
            });
            res.json({ message: 'Salida de documento registrada', updatedDocument });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al registrar la salida de documento' });
        }
    });
    

    // Ruta para registrar una entrada de documento
    router.post('/documents/:id/entrada', async (req, res) => {
        try {
            const updatedDocument = await Document.findByIdAndUpdate(req.params.id, {
                estado: 'en almacén',
            });
            res.json({ message: 'Entrada de documento registrada', updatedDocument });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al registrar la entrada de documento' });
        }
    });
    

module.exports = router;



