import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokeApi = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    prettier: true,
  }
});

export default PokeApi