import mongoose from "mongoose";
import {DB_USER , DB_PASS, CLUSTER, DATABASE } from '../config/config.js'

// conexion a mongo db
export const conectarDB = async ()=>{
    //variables para armar la ruta 
    // const user = "usuario"
    //const pass = "asdgweas"
    const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER}/${DATABASE}?retryWrites=true&w=majority&appName=CEI-PRACTICAS`

    /*
    Query params:
    - retryWrites:(true)reintentar almacenar los datos nuevamente en caso de que falla.
    - w: (majority) Asegurarnos que la operacion se hizo correctamente en la mayoria de los servers.
    - appName : (CEI-PRACTICAS) identifica tu aplicacion en los logs y metricas que posee mongo db
    */ 

    try{
        await mongoose.connect(url);
        console.log("conectado a mongodb atlas")
        console.log("base de datos actual : ",mongoose.connection.db.databaseName)

        //preguntar que colecciones tengo disponibles
        const collections = await mongoose.connection.db.listCollections().toArray()
        console.log("colecciones disponibles :", collections.map(c=>c.name))
    }catch(e){
        console.error("error al conectarse",e)
    }



  
}


