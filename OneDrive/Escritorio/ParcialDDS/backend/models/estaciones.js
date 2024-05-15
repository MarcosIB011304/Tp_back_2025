import sequelize from "../data/db.js"
import { DataTypes } from "sequelize"


const estaciones = sequelize.define("Estaciones", {
    id: {
        type:DataTypes.STRING,
        primaryKey:true,
        autoIncrement:true,
        field: 'ID_ESTACION'
    },
    nombre: {
        type:DataTypes.STRING,
        field:'NOMBRE'
    },
    direccion: {
        type:DataTypes.STRING,
        field:'DIRECCION'
    },
    id_barrio: {
        type:DataTypes.INTEGER,
        field:'ID_BARRIO'
    },
    fecha_creacion: {
        type:DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMPS"),
        field:'FECHA_HORA_CREACION'
    },
    latitud: {
        type:DataTypes.INTEGER,
        field:'LATITUD'
    },
    longitud: {
        type:DataTypes.INTEGER,
        field:'LONGITUD'
    },
    activa: {
        type:DataTypes.INTEGER,
        defaultValue:1,
        field:'ACTIVA'
    }
    },{
        timestamps:false,
        tableName:'ESTACIONES'
    }
)

export {estaciones}