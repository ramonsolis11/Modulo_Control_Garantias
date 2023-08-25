// backend/controllers/documentController.js
const Document = require('../models/Document');

// Controlador para crear un nuevo documento
exports.createDocument = async (req, res) => {
    try {
        const newDocument = new Document(req.body);
        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument);
    } catch (error) {
        res.status(500).json({ error: 'Error creating document' });
    }
    };

    // Controlador para obtener todos los documentos
    exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
    };

    // Controlador para obtener un documento por su ID
    exports.getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        res.status(200).json(document);
    } catch (error) {
        res.status(404).json({ error: 'Document not found' });
    }
    };

    // Controlador para actualizar un documento por su ID
    exports.updateDocument = async (req, res) => {
    try {
        const updatedDocument = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(500).json({ error: 'Error updating document' });
    }
    };

    // Controlador para eliminar un documento por su ID
    exports.deleteDocument = async (req, res) => {
    try {
        await Document.findByIdAndRemove(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting document' });
    }
};
