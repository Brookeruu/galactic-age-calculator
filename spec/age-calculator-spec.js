import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;

  beforeEach(function () {
    ageEarth = new AgeCalculator(30);
  });

  it('should take in a number and return it', function() {
    expect(ageEarth.earthAge()).toEqual(30);
  });

});
