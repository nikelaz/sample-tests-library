const fetchCharacters = require('../src/fetch-characters');

test('fetches an array of 10 objects', async () => {
  // Arrange & Act
  const chars = await fetchCharacters();

  // Assert
  expect(chars.length).toEqual(10);
  expect(typeof chars[0]).toEqual('object')
});