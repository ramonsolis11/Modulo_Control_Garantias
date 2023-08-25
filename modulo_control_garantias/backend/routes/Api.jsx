// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Lot = require('../models/Lot');

// Ruta para obtener los lotes recibidos
router.get('/lots/received', async (req, res) => {
  try {
    const receivedLots = await Lot.find({ estado: 'recibido' });
    res.json(receivedLots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los lotes recibidos' });
  }
});

// Ruta para aceptar un lote
router.post('/lots/:id/accept', async (req, res) => {
    try {
        const updatedLot = await Lot.findByIdAndUpdate(req.params.id, {
        estado: 'aceptado',
        });
        res.json({ message: 'Lote aceptado exitosamente', updatedLot });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al aceptar el lote' });
    }
    });

    // Ruta para rechazar un lote
    router.post('/lots/:id/reject', async (req, res) => {
    try {
        const updatedLot = await Lot.findByIdAndUpdate(req.params.id, {
        estado: 'rechazado',
        });
        res.json({ message: 'Lote rechazado exitosamente', updatedLot });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al rechazar el lote' });
    }
});

module.exports = router;


