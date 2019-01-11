import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;
  let ageEarthNotLeapYear;
  let ageEarthIsLeapYear;
  let badAgeEarth;
  let badAgeEarthNotLeapYear;


  beforeEach(function () {
    ageEarth = new AgeCalculator(
                5,
                9,
                1988);
    badAgeEarth = new AgeCalculator(
                5,
                49,
                1900);
    ageEarthNotLeapYear = new AgeCalculator(
                10,
                10,
                1900);
    ageEarthIsLeapYear = new AgeCalculator(
                2,
                29,
                2004);
    badAgeEarthNotLeapYear = new AgeCalculator(
                2,
                29,
                1700);
  });

  it('should take in a birthday month, day, year and return it', function() {
    expect(ageEarth.monthInput).toEqual(5);
    expect(ageEarth.dayInput).toEqual(9);
    expect(ageEarth.yearIput).toEqual(1988);
  });

  it('should check validity of input date', function(){
    expect(ageEarth.isInputValid()).toEqual(true);
    console.log(ageEarth);
    expect(badAgeEarth.isInputValid()).toEqual(false);
  });

  it('should check if input year is a leap year', function(){
    expect(ageEarth.isLeapYear()).toEqual(true);
    expect(ageEarthNotLeapYear.isLeapYear()).toEqual(false);

  });

  it('should check if input 2-29-Year birthdate valid, accounting for leap years', function(){
    expect(ageEarthIsLeapYear.isInputValid()).toEqual(true);
    expect(badAgeEarthNotLeapYear.isInputValid()).toEqual(false);
  });

  it('should calculate number of days between birthdate and today, the # days alive', function(){
    expect(ageEarth.numberDaysAlive()).toEqual(11204);
    expect(ageEarthIsLeapYear.numberDaysAlive()).toEqual(5430)
  });

  it('should return total milliseconds birthdate - today', function() {
    expect(ageEarth.totalMillisecondsAlive()).toEqual(968025600000);
    expect(ageEarthIsLeapYear.totalMillisecondsAlive()).toEqual(469152000000)
  })


});
