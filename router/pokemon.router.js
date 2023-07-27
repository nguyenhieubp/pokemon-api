import express from "express";
const router = express.Router();

import pokemonController from "../controller/pokemon.controller.js";

router.get("/", pokemonController.getAllPokemon);
router.get("/:id", pokemonController.getPokemon);

export default router;
