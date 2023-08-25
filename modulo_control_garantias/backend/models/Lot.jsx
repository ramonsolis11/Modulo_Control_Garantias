// backend/models/Lot.js
const mongoose = require('mongoose');

const lotSchema = new mongoose.Schema({
  fechaOtorgada: String,
  nombreCliente: String,
  centroCosto: String,
  // Otros campos del formulario
});

const Lot = mongoose.model('Lot', lotSchema);

module.exports = Lot;

