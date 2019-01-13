import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let ageEarth;
  let ageEarthNotLeapYear;
  let ageEarthIsLeapYear;
  let badAgeEarth;
  let badAgeEarthNotLeapYear;
  let testDate = new Date(2019, 0, 12, 0,0,0);
  let myBday = new Date(1988, 4, 9, 0,0,0);
  let oldBday = new Date(1900, 5, 19, 0,0,0);
  let futureBday = new Date(2050, 10, 22, 0,0,0);
  let futureAge;


  beforeEach(function () {
    ageEarth = new AgeCalculator(myBday,testDate);
    badAgeEarth = new AgeCalculator(oldBday,testDate);
    futureAge = new AgeCalculator(futureBday,testDate);
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
    expect(ageEarth.birthdate.toDateString()).toEqual('Mon May 09 1988');
    expect(ageEarth.today.toDateString()).toEqual('Sat Jan 12 2019');
    expect(badAgeEarth.birthdate.toDateString()).toEqual('Tue Jun 19 1900');
    expect(badAgeEarth.today.toDateString()).toEqual('Sat Jan 12 2019');

  });

  it('should return how many milliseconds between birthdate and today date', function() {
    expect(ageEarth.totalMilliSecsAlive()).toEqual(968115600000);
    expect(badAgeEarth.totalMilliSecsAlive()).toEqual(3741638400000);
  });

  it('should return number earth years alive', function() {
    expect(ageEarth.totalEarthDays()).toEqual(11205);
    expect(badAgeEarth.totalEarthDays()).toEqual(43306);
  });

  it('should return number earth years alive and number days into current birthday year', function() {
    expect(ageEarth.ageEarth()).toEqual(30);
    expect(badAgeEarth.ageEarth()).toEqual(118);
  });

  it('should return false if input age is greater than today', function() {
    expect(ageEarth.isValid()).toEqual(true);
    expect(badAgeEarth.isValid()).toEqual(true);
    expect(futureAge.isValid()).toEqual(false);
  });

  it('should calculate age in Mercury years', function() {
    expect(ageEarth.ageMercury()).toEqual(127);
    expect(badAgeEarth.ageMercury()).toEqual(494);
    expect(futureAge.ageMercury()).toEqual(false);
  });

  it('should calculate age in Venus years', function() {
    expect(ageEarth.ageVenus()).toEqual(49);
    expect(badAgeEarth.ageVenus()).toEqual(191);
    expect(futureAge.ageVenus()).toEqual(false);
  });

  it('should calculate age in Mars years', function() {
    expect(ageEarth.ageMars()).toEqual(49);
    expect(badAgeEarth.ageMars()).toEqual(191);
    expect(futureAge.ageMars()).toEqual(false);
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
