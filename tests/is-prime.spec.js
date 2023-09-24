const isPrime = require('../src/is-prime');

test('returns true for multiple prime numbers', () => {
  // Arrange
  const primes = [2, 79, 191, 311, 439, 2011];
  const expectedResult = primes.map(x => true);

  // Act
  const results = primes.map(x => isPrime(x));

  // Assert
  expect(results).toEqual(expectedResult);
});

test('returns false for multiple non-prime numbers', () => {
  // Arrange
  const nonPrimes = [4, 110, 116, 120];
  const expectedResult = nonPrimes.map(x => false);

  // Act
  const results = nonPrimes.map(x => isPrime(x));

  // Assert
  expect(results).toEqual(expectedResult);
});