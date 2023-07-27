import { pokemons } from "../data-mock.js";
import createError from "../middlewares/createError.js";

export const getAllPokemon = (req, res, next) => {
  try {
    /**GET ID, NAME */
    const dataPokemons = pokemons.map((pokemon) => [
      { id: pokemon.id, name: pokemon.name, image: pokemon.image },
    ]);
    res.status(200).json({ pokemons: dataPokemons });
  } catch (error) {
    next(createError(404, error));
  }
};

export const getPokemon = (req, res, next) => {
  const { id } = req.params;
  try {
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    if (!pokemon) {
      return next(createError(404, `pokemon id ${id}  not found`));
    }
    res.status(200).json(pokemon);
  } catch (error) {
    next(createError(500, error));
  }
};

const pokemonController = {
  getAllPokemon,
  getPokemon,
};

export default pokemonController;
