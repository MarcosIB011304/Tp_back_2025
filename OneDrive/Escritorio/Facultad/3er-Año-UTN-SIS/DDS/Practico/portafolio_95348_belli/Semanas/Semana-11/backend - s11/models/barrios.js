// Barrio.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Barrio = sequelize.define("Barrio", {
    idBarrio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "ID_BARRIO", // Nombre real del campo en la tabla de base de datos
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "NOMBRE", // Nombre real del campo en la tabla de base de datos
    },
}, {
    timestamps: false, // No necesitamos campos de fecha de creación y actualización automáticos
    tableName: "BARRIOS", // Nombre real de la tabla en la base de datos
});

export default Barrio;
