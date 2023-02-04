// eslint-disable-next-line no-unused-vars
import axios from "axios";
const pokemonAPI = "https://pokeapi.co/api/v2";

// eslint-disable-next-line no-unused-vars
export async function getPokemon(id) {
  const response = await axios.get(`${pokemonAPI}/pokemon/${id}`);
  return response.data;
}
