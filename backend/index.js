// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
// Configuración de variables de entorno
dotenv.config();

// Crear una app de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar las rutas
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api', exampleRoutes);
app.use('/api/auth', authRoutes);

// Conectar a la base de datos MongoDB (sin opciones deprecated)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

