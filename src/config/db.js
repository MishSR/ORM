import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Biblioteca", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

