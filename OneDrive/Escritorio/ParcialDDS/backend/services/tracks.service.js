import sequelize from "sequelize";
import tracks_data from "../models/tracks.models.js";
import Op from "sequelize";



const ObtenerCanciones = async(req,res) =>{
    try {
        const canciones = await tracks_data.findAll({
            where:{
                name:{[sequelize.Op.substring]:"love"}, // name mismo nombre que incio de modelo de estructura
                gendre: {[sequelize.Op.in]:["Jazz","Blues","Latin"]}},
                order: [['MILLISECONDS',"DESC"]]
    });
        res.json(canciones)
            
        } catch (error) {console.log(error)}
}


export default ObtenerCanciones;