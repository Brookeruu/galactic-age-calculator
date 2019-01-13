export class AgeCalculator {
  constructor(birthdate,today) {
    this.birthdate = birthdate;
    this.today = today;
  }

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

  
  totalEarthDays() {
    let totalEarthDays = Math.floor((this.totalMilliSecsAlive() / 86400000))
    return totalEarthDays;
  }


  ageMercury() {
    const mercuryYearMilliSecs = 7573668480;
    let totalMilliSecsAlive = this.totalMilliSecsAlive();
    let mercuryAge = Math.floor(totalMilliSecsAlive / mercuryYearMilliSecs);

    if (this.isValid() === true) {
        return mercuryAge;
    } else {
      return false;
    }
  }

  ageVenus() {
    const venusYearMilliSecs = 19565310240;
    let totalMilliSecsAlive = this.totalMilliSecsAlive();
    let ageVenus = Math.floor(totalMilliSecsAlive / venusYearMilliSecs);

    if (this.isValid() === true) {
        return ageVenus;
    } else {
      return false;
    }
  }

  ageMars() {
    const marsYearMilliSecs = 59327069760;
    let totalMilliSecsAlive = this.totalMilliSecsAlive();
    let ageMars = Math.floor(totalMilliSecsAlive / marsYearMilliSecs);

    if (this.isValid() === true) {
        return ageMars;
    } else {
      return false;
    }
  }

  ageJupiter() {
    const jupiterYearMilliSecs = 374265450720;
    let totalMilliSecsAlive = this.totalMilliSecsAlive();
    let ageJupiter = Math.floor(totalMilliSecsAlive / jupiterYearMilliSecs);

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
    let totalMilliSecsLeft = (lifeExpectancyAvg - this.totalMilliSecsAlive());


    let earthTimeLeft = Math.floor((totalMilliSecsLeft / 31556952000));
    let mercuryTimeLeft =  Math.floor((totalMilliSecsLeft / 7573668480));
    let venusTimeLeft =  Math.floor((totalMilliSecsLeft / 19565310240));
    let marsTimeLeft =  Math.floor((totalMilliSecsLeft / 59327069760));
    let jupiterTimeLeft =  ((totalMilliSecsLeft / 374265450720)).toFixed(2);


    let timeLeftAllPlanets = [earthTimeLeft, mercuryTimeLeft, venusTimeLeft, marsTimeLeft, jupiterTimeLeft];

    return timeLeftAllPlanets;
  }



} //closes class
