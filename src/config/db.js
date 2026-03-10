import { Sequelize } from "sequelize";

const sequelize = new Sequelize("biblioteca", "userTest", "Password123", {
  host: "localhost", 
    dialect: "mysql", 
});


export default sequelize;