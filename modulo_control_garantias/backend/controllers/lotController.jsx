// backend/controllers/lotController.js
const Lot = require('../models/Lot');

// Controlador para crear un nuevo lote
exports.createLot = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    
        try {
        const newLot = new Lot(req.body);
        const savedLot = await newLot.save();
        res.status(201).json(savedLot);
        } catch (error) {
        res.status(500).json({ error: 'Error creating lot' });
    }
};


    // Controlador para obtener todos los lotes
    exports.getAllLots = async (req, res) => {
    try {
        const lots = await Lot.find();
        res.status(200).json(lots);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching lots' });
    }
    };

    // Controlador para obtener un lote por su ID
    exports.getLotById = async (req, res) => {
    try {
        const lot = await Lot.findById(req.params.id);
        res.status(200).json(lot);
    } catch (error) {
        res.status(404).json({ error: 'Lot not found' });
    }
    };

    // Controlador para actualizar un lote por su ID
    exports.updateLot = async (req, res) => {
    try {
        const updatedLot = await Lot.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedLot);
    } catch (error) {
        res.status(500).json({ error: 'Error updating lot' });
    }
    };

    // Controlador para eliminar un lote por su ID
    exports.deleteLot = async (req, res) => {
    try {
        await Lot.findByIdAndRemove(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting lot' });
    }
};
