import express from "express";
import routes from "./src/routes/index.js";
import {sequelize} from "./src/config/db.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", routes);

sequelize
  .sync()
  .then(() => console.log("MySQL connected & tables synced"))
  .catch((err) => console.error(err));


app.listen(PORT, () => {
  console.log("Server running");
});

