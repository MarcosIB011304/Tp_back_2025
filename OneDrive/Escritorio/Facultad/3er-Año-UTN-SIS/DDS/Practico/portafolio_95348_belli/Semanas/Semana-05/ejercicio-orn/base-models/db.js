const{Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './cine-db.db'
})

const initDb = () => {
    const calificaciones = sequelize.define(
        'CLASIFICACIONES',
    )
}

