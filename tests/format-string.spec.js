const formatStr = require('../src/format-string');

test('formatStr() output includes Hello and !', () => {
  // Arrange
  const input = 'John';
  const expectedSymbols = ['Hello', input, '!'];

  // Act
  const result = formatStr(input);

  // Assert
  for (let symbol of expectedSymbols) {
    expect(result).toMatch(symbol);
  }
});

test('expect it to throw when passed a non-string argument', () => {
  // Arrange
  const input = 3;

  // Act & Assert
  expect(() => formatStr(input)).toThrow();
});
