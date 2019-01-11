import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;

  beforeEach(function () {
    ageEarth = new AgeCalculator(5,9,1988);
  });

  it('should take in a birthday month, day, year and return it', function() {
    expect(ageEarth.monthInput).toEqual(5);
    expect(ageEarth.dayInput).toEqual(9);
    expect(ageEarth.yearIput).toEqual(1988);
  });

  // it('should calculate ')

});
