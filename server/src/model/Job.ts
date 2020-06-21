import { DataTypes } from 'sequelize'
import db from './db'
import ModelStatic from './ModelStatic'

const Job = <ModelStatic>db.define('jobs', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    status: DataTypes.STRING,
    suburb_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'suburbs',
        },
    },
    category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'categories'
        },
    },
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    price: DataTypes.INTEGER.UNSIGNED,
    description: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
}, { timestamps: false, freezeTableName: true })

export default Job
