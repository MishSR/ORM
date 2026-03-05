import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "author",
    timestamps: false,
  },
);

export default Author;