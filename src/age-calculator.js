export class AgeCalculator {
  constructor(monthInput, dayInput, yearIput) {
    this.monthInput = monthInput;
    this.dayInput = dayInput;
    this.yearIput = yearIput;
  }

  isLeapYear() {
    if (this.yearIput % 4 === 0 && this.yearIput % 100 !== 0) {
      return true;
    } else if (this.yearIput % 100 === 0 && this.yearIput % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

  isInputValid() {
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (this.monthInput >= 1 && this.monthInput <= 12) {
      if (this.dayInput >= 1 && this.dayInput <= daysInMonth[this.monthInput -1]) {
        return true;
      } else if (this.isLeapYear() === true && this.monthInput === 2 && this.dayInput === 29) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  numberDaysAlive() {
    let today = new Date();
    let birthdate = new Date(this.yearIput, (this.monthInput-1), this.dayInput)
    let totalDays = Math.floor(((today - birthdate) / (60*60*24*1000)));

    return totalDays;
  }

  totalMillisecondsAlive() {
    let totalMilliseconds = this.numberDaysAlive() * (60*60*24*1000);
    return totalMilliseconds;
  }

  ageMercury() {
    const mercuryYearMilliSecs = 7573668480;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let mercuryAge = Math.floor(totalMillisecondsAlive / mercuryYearMilliSecs);

    if (this.isInputValid() === true) {
        return mercuryAge;
    } else {
      return false;
    }
  }

  ageVenus() {
    const venusYearMilliSecs = 19565310240;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageVenus = Math.floor(totalMillisecondsAlive / venusYearMilliSecs);

    if (this.isInputValid() === true) {
        return ageVenus;
    } else {
      return false;
    }
  }

  ageMars() {
    const marsYearMilliSecs = 59327069760;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageMars = Math.floor(totalMillisecondsAlive / marsYearMilliSecs);

    if (this.isInputValid() === true) {
        return ageMars;
    } else {
      return false;
    }
  }

  ageJupiter() {
    const jupiterYearMilliSecs = 374265450720;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageJupiter = Math.floor(totalMillisecondsAlive / jupiterYearMilliSecs);

    if (this.isInputValid() === true) {
        return ageJupiter;
    } else {
      return false;
    }
  }



} //closes class
