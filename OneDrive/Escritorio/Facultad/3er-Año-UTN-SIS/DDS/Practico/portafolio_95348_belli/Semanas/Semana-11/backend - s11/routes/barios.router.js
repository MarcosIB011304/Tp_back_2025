import appExpress from "express";
import { obtenerBarrios,
    createBarrio,
    obtenerBarrioPorId,
    updateBarrio,
    deleteBarrio } from "../services/barrios.service.js";

const barriosRouter = appExpress.Router();

barriosRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const barrios = await obtenerBarrios();

        // envío la respuesta con el resultado de la consulta.
        res.json(barrios);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo barrios." });
    }
});

barriosRouter.post("/", async (req, res, next) => {
    try {
        const barrio = await createBarrio(req.body);
        res.status(201).json(barrio);
    }
    catch (err) {
        next(err);
    }
});

barriosRouter.get("/:id", async (req, res, next) => {
    try {
        const barrio = await obtenerBarrioPorId(req.params.id);
        if (barrio) {
            res.json(barrio);
        }
        else {
            res.status(404).send("Barrio not found");
        }
    }
    catch (err) {
        next(err);
    }
});

barriosRouter.put("/:id", async (req, res, next) => {
    try {
        await updateBarrio(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

barriosRouter.delete("/:id", async (req, res, next) => {
    try {
        await deleteBarrio(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default barriosRouter;
