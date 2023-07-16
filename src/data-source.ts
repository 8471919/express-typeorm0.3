import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import * as dotenv from "dotenv";

dotenv.config();

const dataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_DATABASE,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	entities: [User],
	synchronize: false,
	logging: true,
});

dataSource.initialize();

export default dataSource;
