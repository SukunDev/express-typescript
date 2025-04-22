import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
