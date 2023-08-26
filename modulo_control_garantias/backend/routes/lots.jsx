// backend/routes/lots.js
const express = require('express');
const router = express.Router();
const Lot = require('../models/Lot');

// Ruta para crear un nuevo lote
router.post('/', async (req, res) => {
    try {
        const newLotData = req.body;
        const newLot = await Lot.create(newLotData);
        res.status(201).json(newLot);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el lote' });
    }
});


// Ruta para obtener todos los lotes
router.get('/', lotController.getAllLots);

// Ruta para obtener un lote por su ID
router.get('/:id', lotController.getLotById);

// Ruta para actualizar un lote por su ID
router.put('/:id', lotController.updateLot);

// Ruta para eliminar un lote por su ID
router.delete('/:id', lotController.deleteLot);

module.exports = router;
