import express from 'express'
import cors from 'cors';
import router from './routes/index.routes.js'
import { PORT,DOMAIN } from './config/config.js';
import {conectarDB} from './db/mongoose.js'
import { errorHandler, notFoundHandler } from './middleware/handleErrors.js';

const app = express();
// permite acceso desde cualquier servidor 
console.clear()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Conexión a la base de datos
conectarDB()

// Rutas
app.get("/",(req,res,next)=>{
    res.send("Bienvenidos a la base de datos de mongo db ")
})

app.use("/api/v1/",router);

// Middlewares de errores (deben ir al final)
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`servidor funcionando en ${DOMAIN}:${PORT}`)
})











