import sequelize from "../data/db.js"
import DataTypes from "sequelize"

const tracks_data = sequelize.define("Tracks_Data",{ // mismo nombre base de datos
    tracks_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"TRACK_ID"
    },
    name:{
        type:DataTypes.TEXT,
        field:"NAME"
    },
    album:{
        type:DataTypes.TEXT,
        field:"ALBUM"
    },
    artist_name:{
        type:DataTypes.TEXT,
        field:"ARTIST_NAME"
    },
    composer:{
        type:DataTypes.TEXT,
        field:"COMPOSER"
    },
    milliseconds:{
        type:DataTypes.INTEGER,
        field:"MILLISECONDS"
    },
    gendre:{
        type:DataTypes.TEXT,
        field:"GENRE"
    },
    media_type:{
        type:DataTypes.TEXT,
        field:"MEDIA_TYPE"
    },
    
},
{
    timestamps:false,
    tableName:"Tracks_Data" // mismo nommbre que base de datos sql
});

export default tracks_data;