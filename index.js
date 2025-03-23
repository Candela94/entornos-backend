

import { PORT, DOMAIN } from "./config/config.js";
import express from 'express';
import router from "./routes/index.routes.js";



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get("/", (req, res, next) => {
    res.send("Bienvenida a mi asíncrono de entornos :)")
})


app.use("/api/v1",router)


app.listen( PORT , () => {
    console.log(`Servidor funcionando en ${DOMAIN}:${PORT}`)
})