import { Op } from "sequelize";
import sequelize from "../data/db.js";
import Estaciones from "../models/estaciones.js";
// import Barrios from "../models/barrios.js";
import Barrio from "../models/barrios.js";

// async function completarNombresBarrios(estaciones) {
//     const result = await Promise.all(estaciones.map(async (estacion) => {
//         const barrio = await Barrios.findByPk(estacion.idBarrio);
//         // estacion.nombreBarrio = barrio.nombre;
//         return { ...estacion.dataValues, nombreBarrio: barrio.nombre };
//     }));
//     // console.log(result);
//     return result;
// }

export async function obtenerEstaciones(activas = true) {
    // realizo la consulta a la base de datos.
    const estaciones = await Estaciones.findAll({
        include: [
            {
                model: Barrio,
                as: "barrio",
                required: true
            }
        ],
        where: activas ? { activa: 1 } : {},
        order: ["NOMBRE"],
    });

    // completar nombres de barrios buscando 1 por 1
    // estaciones = await completarNombresBarrios(estaciones);

    // envío la respuesta con el resultado de la consulta.
    return estaciones;
}

export async function obtenerEstacionPorId(id) {
    return Estaciones.findByPk(id);
}

export async function obtenerEstacionesPorFiltro(query) {
    const { nom, dir, barrio, inactivos } = query;

    const where = {};
    if (nom) {
        where.nombre = { [Op.like]: `${nom}%` };
    }

    if (dir) {
        where.direccion = { [Op.like]: `${dir}%` };
    }

    if (barrio) {
        where.idBarrio = Number(barrio);
    }

    if (!inactivos) {
        where.activa = 1;
    }

    const estaciones = await Estaciones.findAll(
        { include: [
            {
                model: Barrio,
                as: "barrio",
                required: true
            }
        ],
        where,
        order: sequelize.col("nombre") }
    );

    // si usamos el camino de completar el objeto con los barrios buscando cada uno
    //  por separado deberíamos aquí completarlos pero además habría que repensar la
    //  consulta.

    return estaciones;
}

export async function crearEstacion(data) {
    const estacionEntity = { ...data, activa: true };
    return Estaciones.create(estacionEntity);
}

export async function actualizarEstacion(id, data) {
    return Estaciones.update(data, { where: { idEstacion: id } });
}

export async function desactivarEstacion(id) {
    const estacion = await Estaciones.findByPk(id);

    estacion.activa = 0;
    estacion.save();
    return estacion;
}
