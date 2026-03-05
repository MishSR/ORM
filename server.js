import express from "express";
import routes from "./src/routes/index.js";
import sequelize from "./src/config/db.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", routes);

sequelize.authenticate().then(() => {
  console.log("My sequelize connection is successfully.");
}).catch((err) => {
  console.error("Unable to connect to the database:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

