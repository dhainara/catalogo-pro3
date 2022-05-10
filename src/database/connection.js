import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    /*process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_LOCAL,
        port: 5432,
        dialect:'postgres'
    }*/

   process.env.DB_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
        
    }
)

console.log(process.env.DB_BASE)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
console.log(process.env.DB_LOCAL)

