import PokeApi from './PokeApi';

const getPokemonList = async (limit: number, offset: number) => {
  const response = await PokeApi.get(`?limit=${limit}&offset=${offset}`);
  var result = JSON.parse(response.data.results);
  return result;
}

export default {
  getPokemonList,
}