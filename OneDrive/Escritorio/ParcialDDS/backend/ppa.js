import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ObtenerLocales from "./services/Starbucks.service.js"
import ObtenerLocalesInterior from "./services/StarbucksInterior.service.js";
import dbInit from "./data/db-init.js";

dotenv.config({path: "./config/.env" });

const app = express();

app.use(cors());

app.get("/status", (req, res) => {
    res.json({ respuesta: "API iniciada y escuchando..." });
});

app.get("/locales",ObtenerLocales);

app.get("/locales/interior",ObtenerLocalesInterior);

(async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}());
