const UnitConverter = require('../src/unit-converter');

describe('meterToFeet()', () => {
  test('meterToFeet() converts integer 1m value correctly', () => {
    // Arrange
    const inputMeters = 1;
    const expectedFeet = 3.28084;
  
    // Act
    const result = UnitConverter.meterToFeet(inputMeters);
  
    // Assert
    expect(result).toEqual(expectedFeet);
  });
  
  test('meterToFeet() converts floating point 1.55m value correctly', () => {
    // Arrange
    const inputMeters = 1.55;
    const expectedFeet = 5.085302;
  
    // Act
    const result = UnitConverter.meterToFeet(inputMeters);
  
    // Assert
    expect(result).toEqual(expectedFeet);
  });
});