import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";
import Barrio from "./barrios.js";

const Estacion = sequelize.define("Estacion", {
    idEstacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "ID_ESTACION",
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "NOMBRE",
    },
    direccion: {
        type: DataTypes.STRING(250),
        allowNull: false,
        field: "DIRECCION",
    },
    idBarrio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "ID_BARRIO",
    },
    fechaHoraCreacion: {
        type: DataTypes.DATE,
        // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue: DataTypes.NOW,
        field: "FECHA_HORA_CREACION",
    },
    latitud: {
        type: DataTypes.REAL,
        field: "LATITUD"
    },
    longitud: {
        type: DataTypes.REAL,
        field: "LONGITUD"
    },
    activa: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        field: "ACTIVA"
    },
}, {
    timestamps: false,
    tableName: "ESTACIONES",
});

Estacion.belongsTo(Barrio, { foreignKey: "idBarrio", as: "barrio" });

export default Estacion;
