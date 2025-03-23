

import { PORT, DOMAIN } from "./config/config.js";
import express from 'express';
import router from "./routes/index.routes.js";
import cors from 'cors'


const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'POST'],
    allowedHeaders:['Content-Type']
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get("/", (req, res, next) => {
    res.send("Bienvenida a mi asíncrono de entornos :)")
})


app.use("/api/v1",router)


app.listen( PORT , () => {
    console.log(`Servidor funcionando en ${DOMAIN}:${PORT}`)
})