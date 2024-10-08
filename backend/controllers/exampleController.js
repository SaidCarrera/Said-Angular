const Example = require('../models/exampleModel');

// Obtener todos los items
exports.getItems = async (req, res) => {
    try {
        const items = await Example.find(); // Buscar todos los items en la BD
        res.json(items); // Enviar los items como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error obteniendo los items', error });
    }
};

// Crear un nuevo item
exports.createItem = async (req, res) => {
    const { name, description } = req.body; // Obtener el nombre y descripción del body de la petición

    try {
        const newItem = new Example({ name, description }); // Crear un nuevo documento de item
        const savedItem = await newItem.save(); // Guardar el item en la BD
        res.status(201).json(savedItem); // Enviar el item creado como respuesta
    } catch (error) {
        res.status(400).json({ message: 'Error creando el item', error });
    }
};

// Actualizar un item existente
exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body; // Obtener los nuevos datos desde el body

    try {
        const updatedItem = await Example.findByIdAndUpdate(
            id,
            { name, description },
            { new: true } // Esta opción devuelve el documento actualizado
        );

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }

        res.json(updatedItem); // Enviar el item actualizado como respuesta
    } catch (error) {
        res.status(400).json({ message: 'Error actualizando el item', error });
    }
};

// Eliminar un item
exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await Example.findByIdAndDelete(id); // Eliminar el item por su ID

        if (!deletedItem) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }

        res.json({ message: 'Item eliminado exitosamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error eliminando el item', error });
    }
};
