// backend/routes/documents.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Ruta para crear un nuevo documento
router.post('/', documentController.createDocument);

// Ruta para obtener todos los documentos
router.get('/', documentController.getAllDocuments);

// Ruta para obtener un documento por su ID
router.get('/:id', documentController.getDocumentById);

// Ruta para actualizar un documento por su ID
router.put('/:id', documentController.updateDocument);

// Ruta para eliminar un documento por su ID
router.delete('/:id', documentController.deleteDocument);

module.exports = router;

