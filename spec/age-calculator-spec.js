import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;
  let ageEarthNotLeapYear;

  beforeEach(function () {
    ageEarth = new AgeCalculator(
                5,
                9,
                1988);
    ageEarthNotLeapYear = new AgeCalculator(
                10,
                10,
                1900);

  });

  it('should take in a birthday month, day, year and return it', function() {
    expect(ageEarth.monthInput).toEqual(5);
    expect(ageEarth.dayInput).toEqual(9);
    expect(ageEarth.yearIput).toEqual(1988);
  });

  it('should check validity of input date', function(){
    expect(ageEarth.isInputValid()).toEqual(true);
  })

  it('should check if input year is a leap year', function(){
    expect(ageEarth.isLeapYear()).toEqual(true);
    expect(ageEarthNotLeapYear.isLeapYear()).toEqual(false);

  })

  //
  // it('should calculate the number to days on earth from birthday to current date', function() {
  //   expect(ageEarth.totalEarthDays()).toEqual()
  // })

});
