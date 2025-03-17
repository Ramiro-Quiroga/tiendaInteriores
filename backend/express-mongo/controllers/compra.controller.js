import { Compra } from '../db/models/compra.model.js';
import { User } from '../db/models/users.model.js';
import { Producto } from '../db/models/producto.model.js';

export const createCompra = async (req, res) => {
    try {
        const { usuario, productos } = req.body;

        // Verificar si el usuario existe
        const user = await User.findById(usuario);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        // Verificar si los productos existen
        const productosExistentes = await Producto.find({ _id: { $in: productos } });
        if (productosExistentes.length !== productos.length) {
            return res.status(404).json({ message: 'Uno o más productos no existen' });
        }

        // Crear la compra
        const newCompra = new Compra({ usuario, productos });
        await newCompra.save();

        // Asociar la compra al usuario
        user.compras.push(newCompra._id);
        await user.save();

        res.status(201).json(newCompra);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la compra', error: error.message });
    }
};