import { User} from '../db/models/index.js';

const responseApi = {
    data: [],
    msg: "",
    status: "ok"
};

// Obtener todos los usuarios
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        responseApi.data = users;
        responseApi.msg = "Usuarios obtenidos correctamente";
        res.status(200).json(responseApi);
    } catch (e) {
        console.error("Error al obtener los usuarios:", e);
        responseApi.status = "error";
        responseApi.msg = "Error al obtener los usuarios";
        res.status(500).json(responseApi);
        next(e);
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Validar que los campos requeridos estén presentes
        if (!name || !email || !password) {
            return res.status(400).json({
                status: "error",
                msg: "Todos los campos son requeridos"
            });
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: "error",
                msg: "El formato del email no es válido"
            });
        }

        const newUser = await User.create({ name, email, password });
        return res.status(201).json({
            status: "ok",
            data: newUser,
            msg: "Usuario creado correctamente"
        });
    } catch (e) {
        console.error("Error al crear el usuario:", e);
        return res.status(400).json({
            status: "error",
            msg: e.message || "Error al crear el usuario"
        });
    }
};


export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            responseApi.status = "error";
            responseApi.msg = "Usuario no encontrado";
            return res.status(404).json(responseApi);
        }
        responseApi.data = user;
        responseApi.msg = "Usuario obtenido correctamente";
        res.status(200).json(responseApi);
    } catch (e) {
        console.error("Error al obtener el usuario:", e);
        responseApi.status = "error";
        responseApi.msg = "Error al obtener el usuario";
        res.status(500).json(responseApi);
        next(e);
    }
};


export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            responseApi.status = "error";
            responseApi.msg = "Usuario no encontrado";
            return res.status(404).json(responseApi);
        }
        responseApi.data = user;
        responseApi.msg = "Usuario eliminado correctamente";
        res.status(200).json(responseApi);
    } catch (e) {
        console.error("Error al eliminar el usuario:", e);
        responseApi.status = "error";
        responseApi.msg = "Error al eliminar el usuario";
        res.status(500).json(responseApi);
        next(e);
    }
};


export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            responseApi.status = "error";
            responseApi.msg = "Usuario no encontrado";
            return res.status(404).json(responseApi);
        }
        responseApi.data = user;
        responseApi.msg = "Usuario actualizado correctamente";
        res.status(200).json(responseApi);
    } catch (e) {
        console.error("Error al actualizar el usuario:", e);
        responseApi.status = "error";
        responseApi.msg = "Error al actualizar el usuario";
        res.status(500).json(responseApi);
        next(e);
    }
};