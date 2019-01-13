import { AgeCalculator } from '../src/age-calculator.js';

describe ('AgeCalculator', function() {
  let myAge;
  let oldAge;
  let futureAge;
  let testDate = new Date(2019, 0, 12, 0,0,0);
  let myBday = new Date(1988, 4, 9, 0,0,0);
  let oldBday = new Date(1900, 5, 19, 0,0,0);
  let futureBday = new Date(2050, 10, 22, 0,0,0);

  beforeEach(function () {
    myAge = new AgeCalculator(myBday,testDate);
    oldAge = new AgeCalculator(oldBday,testDate);
    futureAge = new AgeCalculator(futureBday,testDate);
  });

  it('should take in a birthday month, day, year and return it', function() {
    expect(myAge.birthdate.toDateString()).toEqual('Mon May 09 1988');
    expect(myAge.today.toDateString()).toEqual('Sat Jan 12 2019');
    expect(oldAge.birthdate.toDateString()).toEqual('Tue Jun 19 1900');
    expect(oldAge.today.toDateString()).toEqual('Sat Jan 12 2019');
  });

  it('should return how many milliseconds between birthdate and today date', function() {
    expect(myAge.totalMilliSecsAlive()).toEqual(968115600000);
    expect(oldAge.totalMilliSecsAlive()).toEqual(3741638400000);
  });

  it('should return number earth years alive', function() {
    expect(myAge.totalEarthDays()).toEqual(11205);
    expect(oldAge.totalEarthDays()).toEqual(43306);
  });

  it('should return number earth years alive and number days into current birthday year', function() {
    expect(myAge.ageEarth()).toEqual(30);
    expect(oldAge.ageEarth()).toEqual(118);
  });

  it('should return false if input age is greater than today', function() {
    expect(myAge.isValid()).toEqual(true);
    expect(oldAge.isValid()).toEqual(true);
    expect(futureAge.isValid()).toEqual(false);
  });

  it('should calculate age in Mercury years', function() {
    expect(myAge.ageMercury()).toEqual(127);
    expect(oldAge.ageMercury()).toEqual(494);
    expect(futureAge.ageMercury()).toEqual(false);
  });

  it('should calculate age in Venus years', function() {
    expect(myAge.ageVenus()).toEqual(49);
    expect(oldAge.ageVenus()).toEqual(191);
    expect(futureAge.ageVenus()).toEqual(false);
  });

  it('should calculate age in Mars years', function() {
    expect(myAge.ageMars()).toEqual(16);
    expect(oldAge.ageMars()).toEqual(63);
    expect(futureAge.ageMars()).toEqual(false);
  });

  it('should calculate age in Jupiter years', function() {
    expect(myAge.ageJupiter()).toEqual(2.6);
    expect(oldAge.ageJupiter()).toEqual(10.0);
    expect(futureAge.ageJupiter()).toEqual(false);
  });

  it('should return an array of numbers, one for each planet, with the amount of years left before reaching', function() {
    expect(myAge.lifeExpectancy()).toEqual([ 47, 199, 77, 25, 4.0 ]);
    expect(oldAge.lifeExpectancy()).toEqual([-40, -167, -65, -22, -3.4 ]);
  });

});
