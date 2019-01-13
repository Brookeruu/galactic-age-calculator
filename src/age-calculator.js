export class AgeCalculator {
  constructor(birthdate,today) {
    this.birthdate = birthdate;
    this.today = today;
  }

  // constructor(today, birthdate) {
  //   this.today = today;
  //   this.birthdate = birthdate;
  // }
  //
  // var userage = new AgeCalculator(new Date(), new Date(user  birthday))

  // isLeapYear() {
  //   if (this.yearIput % 4 === 0 && this.yearIput % 100 !== 0) {
  //     return true;
  //   } else if (this.yearIput % 100 === 0 && this.yearIput % 400 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //
  // isValid() {
  //   const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  //
  //   if (this.month >= 1 && this.month <= 12) {
  //     if (this.day >= 1 && this.day <= daysInMonth[this.month -1]) {
  //       return true;
  //     } else if (this.isLeapYear() === true && this.month === 2 && this.day === 29) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }
  //
  // // numberDaysAlive() {
  // //   let today = new Date();
  // //   let birthdate = new Date(this.yearIput, (this.month-1), this.day)
  // //   let totalDays = Math.floor(((today - birthdate) / (60*60*24*1000)));
  // //   return totalDays;
  // // }

  numberDaysAlive(today, birthdate) {
    // let today = new Date();
    // let birthdate = new Date(this.yearIput, (this.month-1), this.day)
    let totalDays = Math.floor(((this.today - this.birthdate) / (60*60*24*1000)));
    return totalDays;
  }
  //
  // numberDaysAlive(new Date(1/03/19),new Date(this.yearIput, (this.month-1), this.day))
  //

  // totalMillisecondsAlive() {
  //   let totalMilliseconds = this.numberDaysAlive() * (60*60*24*1000);
  //   return totalMilliseconds;
  // }

  totalMilliSecsAlive() {
    let totalMilliSecs = (this.today - this.birthdate);
    return totalMilliSecs;
  }


  ageMercury() {
    const mercuryYearMilliSecs = 7573668480;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let mercuryAge = Math.floor(totalMillisecondsAlive / mercuryYearMilliSecs);

    if (this.isValid() === true) {
        return mercuryAge;
    } else {
      return false;
    }
  }

  ageVenus() {
    const venusYearMilliSecs = 19565310240;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageVenus = Math.floor(totalMillisecondsAlive / venusYearMilliSecs);

    if (this.isValid() === true) {
        return ageVenus;
    } else {
      return false;
    }
  }

  ageMars() {
    const marsYearMilliSecs = 59327069760;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageMars = Math.floor(totalMillisecondsAlive / marsYearMilliSecs);

    if (this.isValid() === true) {
        return ageMars;
    } else {
      return false;
    }
  }

  ageJupiter() {
    const jupiterYearMilliSecs = 374265450720;
    let totalMillisecondsAlive = this.totalMillisecondsAlive();
    let ageJupiter = Math.floor(totalMillisecondsAlive / jupiterYearMilliSecs);

    if (this.isValid() === true) {
        return ageJupiter;
    } else {
      return false;
    }
  }

  lifeExpectancy() {
    const lifeExpectancyAvg = 2480376427200; //78.6 Earth Years
    // const lifeExpectancyMale = 2401484047200; // 76.1 Earth Years
    // const lifeExpectancyFemale = 2559268807200; // 81.1 Earth Years
    let totalMilliSecsLeft = (lifeExpectancyAvg - this.totalMillisecondsAlive());


    let earthTimeLeft = Math.floor((totalMilliSecsLeft / 31556952000));
    let mercuryTimeLeft =  Math.floor((totalMilliSecsLeft / 7573668480));
    let venusTimeLeft =  Math.floor((totalMilliSecsLeft / 19565310240));
    let marsTimeLeft =  Math.floor((totalMilliSecsLeft / 59327069760));
    let jupiterTimeLeft =  ((totalMilliSecsLeft / 374265450720)).toFixed(2);


    let timeLeftAllPlanets = [earthTimeLeft, mercuryTimeLeft, venusTimeLeft, marsTimeLeft, jupiterTimeLeft];

    return timeLeftAllPlanets;
  }



} //closes class
