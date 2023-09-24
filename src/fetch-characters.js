const axios = require('axios');

const fetchCharacters = async () => {
  const response = await axios('https://swapi.dev/api/planets');

  return response.data.results.map(result => ({
    name: result.name,
    terrain: result.terrain,
    population: result.population
  }));
};

module.exports = fetchCharacters;
