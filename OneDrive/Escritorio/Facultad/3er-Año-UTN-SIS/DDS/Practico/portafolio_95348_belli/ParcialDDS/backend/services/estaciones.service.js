import {estaciones} from "../models/estaciones.js";

const obtenerEstaciones = async(req,res) => {
    try{
        const est = await estaciones.findAll({where: {activa: 1}, order: ['ID_ESTACION']})
        res.json(est)
    }catch(error){console.log(error)}
}

export {obtenerEstaciones}