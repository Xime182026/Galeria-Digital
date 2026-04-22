require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const usuariosRoutes = require('./routes/usuariosRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);
app.get('/', (req, res) => {
  res.send('API de galería digital funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});