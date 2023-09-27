import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const conn_string = process.env.CONNECTION_STRING;

const connectDB = () => {
    let sequelize = null;
    return () => {
        if(!sequelize)
            sequelize = new Sequelize(conn_string, {
                logging: true
            });
        return sequelize;
    }
}

export default connectDB();