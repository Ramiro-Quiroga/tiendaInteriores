import mongoose from "mongoose";


const options = {
    collection:'productos', // nombre de la coneccion de mongo db
    strict:true, // solo permite guardar los campos difinidos en el esquema
    collation:{
        locale:"es",//configuracion de idioma español
        strength:1 //nivel de comparacion de strings (1: ignorar mayusca)
    }
}
const ProductosSchema = new mongoose.Schema({
    name :String,
    description:String,
    price : Number,
    categoria: {
        type: String,
        enum: ['sillas', 'mesas', 'sofas'],
        required: true
    },
    imagen: String,
    stock: {
        type: Number,
        default: 0
    },
    compras : [{
        type: mongoose.Schema.Types.ObjectId,ref: 'Compras'
    }]

},options)


export const Producto = mongoose.model("Producto",ProductosSchema)