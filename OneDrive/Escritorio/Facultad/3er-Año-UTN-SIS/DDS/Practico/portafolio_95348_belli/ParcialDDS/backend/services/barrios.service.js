import { barrios } from "../models/barrios.js";

const obtenerBarrios = async(req,res) => {
    try{
        const barri = await barrios.findAll({order: ["NOMBRE"]})
        res.json(barri)
    }catch(error){console.log(error)}
}

export {obtenerBarrios}