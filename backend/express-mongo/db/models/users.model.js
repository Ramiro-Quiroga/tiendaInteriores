import mongoose from "mongoose";


const options = {
    collection:'users', // nombre de la coneccion de mongo db
    strict:true, // solo permite guardar los campos difinidos en el esquema
    collation:{
        locale:"es",//configuracion de idioma español
        strength:1 //nivel de comparacion de strings (1: ignorar mayusca)
    }
}
const UserSchema = new mongoose.Schema({
    name :String,
    email: String,
    password : String,
    compras: [{
        type: mongoose.Schema.Types.ObjectId , ref:'Compra'
    }]

},options)


export const User = mongoose.model("User",UserSchema)