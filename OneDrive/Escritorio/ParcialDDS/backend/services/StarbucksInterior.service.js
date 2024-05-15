import Starbucks_directory from "../models/Starbucks.models.js"
import { Op } from "sequelize";

const ObtenerLocalesInterior = async (req,res) => { 
    try {
        const localesInterior = await Starbucks_directory.findAll({
            where:{
                country: "AR",
                [Op.not] : {province : ["B","C"]}
            }
        });

        res.json(localesInterior)
    } catch (error) {
        console.log(error)
    }
};

export default ObtenerLocalesInterior;