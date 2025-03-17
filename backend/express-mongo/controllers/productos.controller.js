import { Producto } from '../db/models/producto.model.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json({
            status: "ok",
            data: productos,
            msg: "Productos obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al obtener los productos",
            error: error.message
        });
    }
};

// Obtener productos por categoría
export const getProductosPorCategoria = async (req, res) => {
    try {
        const { categoria } = req.params;
        const productos = await Producto.find({ categoria });
        res.json({
            status: "ok",
            data: productos,
            msg: `Productos de categoría ${categoria} obtenidos correctamente`
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al obtener los productos por categoría",
            error: error.message
        });
    }
};

// Obtener un producto por ID
export const getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                status: "error",
                msg: "Producto no encontrado"
            });
        }
        res.json({
            status: "ok",
            data: producto,
            msg: "Producto obtenido correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al obtener el producto",
            error: error.message
        });
    }
};

// Crear un nuevo producto
export const createProducto = async (req, res) => {
    try {
        const newProducto = new Producto(req.body);
        await newProducto.save();
        res.status(201).json({
            status: "ok",
            data: newProducto,
            msg: "Producto creado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al crear el producto",
            error: error.message
        });
    }
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!producto) {
            return res.status(404).json({
                status: "error",
                msg: "Producto no encontrado"
            });
        }
        res.json({
            status: "ok",
            data: producto,
            msg: "Producto actualizado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al actualizar el producto",
            error: error.message
        });
    }
};

// Eliminar un producto
export const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({
                status: "error",
                msg: "Producto no encontrado"
            });
        }
        res.json({
            status: "ok",
            msg: "Producto eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: "Error al eliminar el producto",
            error: error.message
        });
    }
};