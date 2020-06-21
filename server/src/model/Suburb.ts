import { DataTypes } from 'sequelize'
import db from './db'
import ModelStatic from './ModelStatic'

const Suburb = <ModelStatic>db.define('suburbs', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    postcode: DataTypes.STRING,
}, { timestamps: false, freezeTableName: true })

export default Suburb
