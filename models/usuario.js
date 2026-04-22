const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre_completo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password_hash: {
    type: String,
    required: true
  },
  fecha_registro: {
    type: Date,
    default: Date.now
  },
  biografia: {
    type: String
  },
  avatar_url: {
    type: String
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);