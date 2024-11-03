const mongoose = require('mongoose');

// Definimos el esquema de usuario
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Exportamos el modelo
module.exports = mongoose.model('User', userSchema);
