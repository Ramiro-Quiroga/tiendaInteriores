import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/user.controller.js";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
    getProductosPorCategoria,
} from "../controllers/productos.controller.js";
import { createCompra } from "../controllers/compra.controller.js";

const router = Router();

// Rutas de Usuarios
router.get("/users", getUsers); // Obtener todos los usuarios
router.post("/users", createUser); // Crear un nuevo usuario
router.get("/users/:id", getUser); // Obtener un usuario por ID
router.put("/users/:id", updateUser); // Actualizar un usuario por ID
router.delete("/users/:id", deleteUser); // Eliminar un usuario por ID

// Rutas de Productos
router.get("/productos", getProductos); // Obtener todos los productos
router.get("/productos/categoria/:categoria", getProductosPorCategoria); // Obtener productos por categoría
router.get("/productos/:id", getProductoById); // Obtener un producto por ID
router.post("/productos", createProducto); // Crear un nuevo producto
router.put("/productos/:id", updateProducto); // Actualizar un producto por ID
router.delete("/productos/:id", deleteProducto); // Eliminar un producto por ID

// Rutas de Compras
router.post("/compras", createCompra); // Crear una nueva compra

export default router;