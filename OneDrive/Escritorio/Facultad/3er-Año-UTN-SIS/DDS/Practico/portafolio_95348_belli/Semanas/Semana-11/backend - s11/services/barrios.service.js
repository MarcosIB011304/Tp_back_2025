import Barrios from "../models/barrios.js";
import Estaciones from "../models/estaciones.js";

export async function obtenerBarrios() {
    // Consulta a la base de datos para traer las filas de la tabla barrios
    //  como objetos y retornar ese conjunto como un vector json.

    // realizo la consulta a la base de datos.
    const barrios = await Barrios.findAll({
        order: ["NOMBRE"]
    });

    // envío la respuesta con el resultado de la consulta.
    return barrios;
}

export async function obtenerBarrioPorId(id) {
    const barrio = await Barrios.findByPk(id);
    return barrio;
}

export async function createBarrio(data) {
    return Barrios.create(data);
}

export async function updateBarrio(id, data) {
    return Barrios.update(data, { where: { idBarrio: id } });
}

export async function deleteBarrio(id) {
    const estacionesAsociadas = await Estaciones.findOne({ where: { idBarrio: id } });
    if (estacionesAsociadas) {
        throw new Error("Cannot delete barrio with associated estaciones");
    }
    return Barrios.destroy({ where: { idBarrio: id } });
}
