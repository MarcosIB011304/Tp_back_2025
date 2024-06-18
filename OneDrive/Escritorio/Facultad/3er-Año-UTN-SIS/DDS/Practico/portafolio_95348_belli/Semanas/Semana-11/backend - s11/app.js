import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.js";

import dbInit from "./data/db-init.js";

import logger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import tokenExtractor from "./middlewares/tokenExtractor.js";

import serverStatusRouter from "./routes/serverStatus.router.js";
import estacionesRouter from "./routes/estaciones.router.js";
import barriosRouter from "./routes/barios.router.js";
import usuariosRouter from "./routes/usuarios.router.js";
import loginRouter from "./routes/login.router.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json()); // Body parser para transformar httpBody en objetos json
// Logs
if (process.env.LOG === "true") {
    app.use(logger);
}

app
    .use("/status", serverStatusRouter)
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app
    .use("/api", loginRouter)
    .use("/api/barrios", tokenExtractor, barriosRouter)
    .use("/api/estaciones", tokenExtractor, estacionesRouter)
    .use("/api/usuarios", tokenExtractor, usuariosRouter);

app
    .use(errorHandler)
    .use(notFound);

async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}

await start();

export default app;
