// backend/routes/lots.js
const express = require('express');
const router = express.Router();
const lotController = require('../controllers/lotController');

// Ruta para crear un nuevo lote
router.post('/', [
    body('fechaOtorgada').notEmpty().isDate(),
    body('nombreCliente').notEmpty(),
    body('centroCosto').notEmpty(),
    // Agrega más validaciones para otros campos
], lotController.createLot);

// Ruta para obtener todos los lotes
router.get('/', lotController.getAllLots);

// Ruta para obtener un lote por su ID
router.get('/:id', lotController.getLotById);

// Ruta para actualizar un lote por su ID
router.put('/:id', lotController.updateLot);

// Ruta para eliminar un lote por su ID
router.delete('/:id', lotController.deleteLot);

module.exports = router;
