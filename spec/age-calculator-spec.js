import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;
  let ageEarthNotLeapYear;
  let ageEarthIsLeapYear;
  let badAgeEarth;
  let badAgeEarthNotLeapYear;
  let testDate = new Date(2019, 0, 12);


  beforeEach(function () {
    ageEarth = new AgeCalculator(
                5,
                9,
                1988,
                testDate);
    badAgeEarth = new AgeCalculator(
                5,
                49,
                1900,
                testDate);
    // ageEarthNotLeapYear = new AgeCalculator(
    //             10,
    //             10,
    //             1900);
    // ageEarthIsLeapYear = new AgeCalculator(
    //             2,
    //             29,
    //             2004);
    // badAgeEarthNotLeapYear = new AgeCalculator(
    //             2,
    //             29,
    //             1700);
  });

  it('should take in a birthday month, day, year and return it', function() {
    expect(ageEarth.birthdate.toDateString()).toEqual('a date');
    expect(ageEarth.today.toDateString()).toEqual('a date');

  });

  // it('should take in a birthday month, day, year and return it', function() {
  //   expect(ageEarth.monthInput).toEqual(5);
  //   expect(ageEarth.dayInput).toEqual(9);
  //   expect(ageEarth.yearIput).toEqual(1988);
  // });
  //
  // it('should check validity of input date', function(){
  //   expect(ageEarth.isInputValid()).toEqual(true);
  //   console.log(ageEarth);
  //   expect(badAgeEarth.isInputValid()).toEqual(false);
  // });
  //
  // it('should check if input year is a leap year', function(){
  //   expect(ageEarth.isLeapYear()).toEqual(true);
  //   expect(ageEarthNotLeapYear.isLeapYear()).toEqual(false);
  //
  // });
  //
  // it('should check if input 2-29-Year birthdate valid, accounting for leap years', function(){
  //   expect(ageEarthIsLeapYear.isInputValid()).toEqual(true);
  //   expect(badAgeEarthNotLeapYear.isInputValid()).toEqual(false);
  // });
  //
  // it('should calculate number of days between birthdate and today, the # days alive', function(){
  //   expect(ageEarth.numberDaysAlive()).toEqual(11204);
  //   expect(ageEarthIsLeapYear.numberDaysAlive()).toEqual(5430)
  // });
  //
  // it('should return total milliseconds birthdate through today', function() {
  //   expect(ageEarth.totalMillisecondsAlive()).toEqual(968025600000);
  //   expect(ageEarthIsLeapYear.totalMillisecondsAlive()).toEqual(469152000000);
  //   expect(ageEarthNotLeapYear.totalMillisecondsAlive()).toEqual(3731788800000);
  // });
  //
  // it('should calculate age in Mercury years', function() {
  //   expect(ageEarth.ageMercury()).toEqual(127);
  //   expect(ageEarthIsLeapYear.ageMercury()).toEqual(61);
  //   expect(ageEarthNotLeapYear.ageMercury()).toEqual(492);
  //   expect(badAgeEarth.ageMercury()).toEqual(false);
  // });
  //
  // it('should calculate age in Venus years', function() {
  //   expect(ageEarth.ageVenus()).toEqual(49);
  //   expect(ageEarthIsLeapYear.ageVenus()).toEqual(23);
  //   expect(ageEarthNotLeapYear.ageVenus()).toEqual(190);
  //   expect(badAgeEarth.ageVenus()).toEqual(false);
  // });
  //
  // it('should calculate age in Mars years', function() {
  //   expect(ageEarth.ageMars()).toEqual(16);
  //   expect(ageEarthIsLeapYear.ageMars()).toEqual(7);
  //   expect(ageEarthNotLeapYear.ageMars()).toEqual(62);
  //   expect(badAgeEarthNotLeapYear.ageMars()).toEqual(false);
  // });
  //
  // it('should calculate age in Jupiter years', function() {
  //   expect(ageEarth.ageJupiter()).toEqual(2);
  //   expect(ageEarthIsLeapYear.ageJupiter()).toEqual(1);
  //   expect(ageEarthNotLeapYear.ageJupiter()).toEqual(9);
  //   expect(badAgeEarthNotLeapYear.ageJupiter()).toEqual(false);
  //   expect(badAgeEarth.ageJupiter()).toEqual(false);
  // });
  //
  // it('should return an array of numbers, one for each planet, with the amount of years left before reaching ', function() {
  //   expect(ageEarth.lifeExpectancy()).toEqual([ 47, 199, 77, 25, '4.04' ]);
  //   expect(ageEarthNotLeapYear.lifeExpectancy()).toEqual([-40, -166, -64, -22, '-3.34' ]);
  // })

});
