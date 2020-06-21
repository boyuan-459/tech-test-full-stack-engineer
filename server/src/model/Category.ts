import { DataTypes } from 'sequelize'
import db from './db'
import ModelStatic from './ModelStatic'

const Category = <ModelStatic>db.define('categories', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    parent_category_id: DataTypes.INTEGER.UNSIGNED,
}, { timestamps: false, freezeTableName: true })

export default Category
