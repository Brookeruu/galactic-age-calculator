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

} //closes class


// let todayDate = new Date();
// let birthdate = new Date(this.yearInput, (this.monthInput -1), this.dayInput);
