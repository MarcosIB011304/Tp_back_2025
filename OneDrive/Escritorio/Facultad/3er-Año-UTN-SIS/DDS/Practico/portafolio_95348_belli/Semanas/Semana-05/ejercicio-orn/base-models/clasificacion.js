const { DataTypes, Sequelize } = require("sequelize")


const ClasificacionAttributes = {
    idClasificacion: {
        type:DataTypes.INI,
        primaryKey: true,
        allowNull:false,
    },
    NombreClassificacion: {

        type:DataTypes.STRING,
        allowNull: false
    }
    
}

const ClasificacionOptions = {
    timestamps: false
}

const ClasificacionModel = {
    ClasificacionAttributes:ClasificacionAttributes,
    ClasificacionOptions:ClasificacionOptions
}

module.exports = {ClasificacionModel}

