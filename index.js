import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
/** FORMAT DATA */
import formatData from "./middlewares/formatData.js";
app.use(formatData);

/** ROUTER POKEMON */
import routerPokemon from "./router/pokemon.router.js";
app.use("/api/v1/pokemon", routerPokemon);

/** HANDLE ERROR*/
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  res.success = false;
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});
