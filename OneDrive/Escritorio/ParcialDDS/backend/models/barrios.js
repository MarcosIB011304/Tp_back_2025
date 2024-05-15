import sequelize from "../data/db.js"
import { DataTypes } from "sequelize"


const barrios = sequelize.define("Barrios", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field: 'ID_BARRIO'
    },
    nombre: {
        type:DataTypes.TEXT,
        field:'NOMBRE'
    }},{
        timestamps:false,
        tableName:'BARRIOS'
    }
)

export {barrios}