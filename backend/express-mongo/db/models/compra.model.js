import mongoose from "mongoose";


const options = {
    collection:'compras', // nombre de la coneccion de mongo db
    strict:true, // solo permite guardar los campos difinidos en el esquema
    collation:{
        locale:"es",//configuracion de idioma español
        strength:1 //nivel de comparacion de strings (1: ignorar mayusca)
    }
}
const CompraSchema = new mongoose.Schema({
   fecha:{type:Date, default : Date.now},
   usuario: {type: mongoose.Schema.Types.ObjectId, ref : 'Usuario'},
   productos:[{type: mongoose.Schema.Types.ObjectId, ref : 'Producto'}]

},options)


export const Compra = mongoose.model("Compras",CompraSchema)