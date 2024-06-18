import appExpress from "express";
import {
    obtenerEstaciones,
    obtenerEstacionPorId,
    obtenerEstacionesPorFiltro,
    crearEstacion,
    actualizarEstacion,
    desactivarEstacion
} from "../services/estaciones.service.js";

const estacionesRouter = appExpress.Router();

estacionesRouter.get("/", async (req, res, next) => {
    try {
        let estaciones = null;
        if (JSON.stringify(req.query) !== "{}") {
            estaciones = await obtenerEstaciones();
        }
        else estaciones = await obtenerEstacionesPorFiltro(req.query);

        res.json(estaciones);
    }
    catch (err) {
        next(err);
    }
});

estacionesRouter.post("/", async (req, res, next) => {
    try {
        const estacion = await crearEstacion(req.body);
        res.status(201).json(estacion);
    }
    catch (err) {
        next(err);
    }
});

estacionesRouter.get("/:id", async (req, res, next) => {
    try {
        const estacion = await obtenerEstacionPorId(req.params.id);
        if (estacion) {
            res.json(estacion);
        }
        else {
            res.status(404).send("Estación not found");
        }
    }
    catch (err) {
        next(err);
    }
});

estacionesRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarEstacion(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

estacionesRouter.delete("/:id", async (req, res, next) => {
    try {
        await desactivarEstacion(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default estacionesRouter;
