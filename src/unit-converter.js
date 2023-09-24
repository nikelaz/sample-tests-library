class UnitConverter {
  static meterToFeet(x) {
    return x * 3.28084;
  }

  static cmToInch(x) {
    return x * 0.393701;
  }

  static literToGallon(x) {
    return x * 0.264172;
  }
}

module.exports = UnitConverter;
