import sequelize from "../data/db.js"
import {DataTypes} from "sequelize"


const Starbucks_directory = sequelize.define("STARBUCKS_DIRECTORY",{
    StoreNumber : {
        type:DataTypes.TEXT,
        primaryKey:true,
        allowNull:true,
        field:"STORE_NUMBER"
    },
    StoreName:{
        type:DataTypes.TEXT,
        field:"STORE_NAME"
    },
    Street_Address:{
        type:DataTypes.TEXT,
        field:"STREET_ADDRESS"
    },
    City:{
        type:DataTypes.TEXT,
        field:"CITY"
    },
    Province:{
        type:DataTypes.TEXT,
        field:"PROVINCE"
    },
    Country:{
        type:DataTypes.TEXT,
        field:"COUNTRY"
    },
    PostCode:{
        type:DataTypes.TEXT,
        field:"POSTCODE"
    },
    Longitude:{
        type:DataTypes.REAL,
        field:"LONGITUDE"
    },
    Latitude:{
        type:DataTypes.REAL,
        field:"LATITUDE"
    },

},
{timestamps:false,
    tableName:"STARBUCKS_DIRECTORY"
})

export default Starbucks_directory;



