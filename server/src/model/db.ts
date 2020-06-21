import { Sequelize } from 'sequelize'
import 'mysql2'

const db = new Sequelize('mysql://root:hipages@localhost:3306/hipages')

export default db
