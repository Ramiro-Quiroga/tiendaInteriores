import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3001;
export const DOMAIN =   process.env.DOMAIN ||  'http://localhost'


export const DB_USER = process.env.DB_USER ||"usuario"
export const DB_PASS = process.env.DB_PASS ||"password"
export const CLUSTER =  process.env.CLUSTER ||"servidor"
export const DATABASE = process.env.DATABASE || "base de datos "



export const FULLDOMAIN = `${DOMAIN}:${PORT}`