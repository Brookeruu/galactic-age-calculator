export class AgeCalculator {
  constructor(birthdate,today) {
    this.birthdate = birthdate;
    this.today = today;
  }

  isValid() {
    if (this.birthdate > this.today) {
      return false;
    } else {
     return true;
    }
  }

  totalMilliSecsAlive() {
    let totalMilliSecs = (this.today - this.birthdate);
    return totalMilliSecs;
  }

  totalEarthDays() {
    let totalEarthDays = Math.floor((this.totalMilliSecsAlive() / 86400000));
    return totalEarthDays;
  }

  ageEarth() {
    let ageEarth = Math.floor((this.totalEarthDays() / 365));
    return ageEarth;
  }

  ageMercury() {
  let mercuryAge = Math.floor((this.totalMilliSecsAlive() / 7573668480))
        //7573668480 milliseconds in 1 Mercury solar year
    if (this.isValid() === true) {
        return mercuryAge;
    } else {
      return false;
    }
  }

  ageVenus() {
    let ageVenus = Math.floor((this.totalMilliSecsAlive() / 19565310240));

    if (this.isValid() === true) {
        return ageVenus;
    } else {
      return false;
    }
  }

  ageMars() {
    let ageMars = Math.floor((this.totalMilliSecsAlive() / 59327069760));

    if (this.isValid() === true) {
        return ageMars;
    } else {
      return false;
    }
  }

  ageJupiter() {
    const jupiterYearMilliSecs = 374265450720;
    let totalMilliSecsAlive = this.totalMilliSecsAlive();
    let ageJupiter = ((this.totalMilliSecsAlive() / 374265450720)).toFixed(1);

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
