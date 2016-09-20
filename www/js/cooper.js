function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};


Person.prototype.cooperResult = function(distance) {
  if (this.gender.toLowerCase() == 'male') {
    this.message = this.getCooperTestMale(distance);
  } else {
    this.message = this.getCooperTestFemale(distance);
  }
};

Person.prototype.getCooperTestMale = function(distance) {
  //just testing for result for male distance
  //now adding age variable
  if(this.age>= 1 && this.age<= 14) {
    if(distance >= 2700){
      return 'Excellent'
    }
    if(distance >= 2400 && distance <= 2699){
      return 'Above Average'
    }
    if(distance >= 2200 && distance <=2399){
      return 'Average'
    }
    if(distance >= 2100 && distance <=2199){
      return 'Below Average'
    }
    if(distance < 2100){
      return 'Poor'
    }
  }
  if(this.age>= 15 && this.age<= 16) {
    if(distance >= 2800){
      return 'Excellent'
    }
    if(distance >= 2500 && distance <= 2799){
      return 'Above Average'
    }
    if(distance >= 2300 && distance <=2499){
      return 'Average'
    }
    if(distance >= 2200 && distance <=2299){
      return 'Below Average'
    }
    if(distance < 2200){
      return 'Poor'
    }
  }
  if(this.age>= 17 && this.age<= 19) {
    if(distance >= 3000){
      return 'Excellent'
    }
    if(distance >= 2700 && distance <= 2999){
      return 'Above Average'
    }
    if(distance >= 2500 && distance <=2699){
      return 'Average'
    }
    if(distance >= 2300 && distance <=2499){
      return 'Below Average'
    }
    if(distance < 2300){
      return 'Poor'
    }
  }
  if(this.age>= 20 && this.age<= 29) {
    if(distance >= 2800){
      return 'Excellent'
    }
    if(distance >= 2700 && distance <= 2999){
      return 'Above Average'
    }
    if(distance >= 2500 && distance <=2699){
      return 'Average'
    }
    if(distance >= 2300 && distance <=2499){
      return 'Below Average'
    }
    if(distance < 2300){
      return 'Poor'
    }
  }
  if(this.age>= 30 && this.age<= 39) {
    if(distance >= 2700){
      return 'Excellent'
    }
    if(distance >= 2300 && distance <= 2699){
      return 'Above Average'
    }
    if(distance >= 1900 && distance <=2299){
      return 'Average'
    }
    if(distance >= 1500 && distance <=1999){
      return 'Below Average'
    }
    if(distance < 1500){
      return 'Poor'
    }
  }
  if(this.age>= 40 && this.age<= 49) {
    if(distance >= 2500){
      return 'Excellent'
    }
    if(distance >= 2100 && distance <= 2499){
      return 'Above Average'
    }
    if(distance >= 1700 && distance <=2099){
      return 'Average'
    }
    if(distance >= 1400 && distance <=1699){
      return 'Below Average'
    }
    if(distance < 1400){
      return 'Poor'
    }
  }
  if(this.age>= 50) {
    if(distance >= 2400){
      return 'Excellent'
    }
    if(distance >= 2000 && distance <= 2399){
      return 'Above Average'
    }
    if(distance >= 1600 && distance <=1999){
      return 'Average'
    }
    if(distance >= 1300 && distance <=1599){
      return 'Below Average'
    }
    if(distance < 1300){
      return 'Poor'
    }
  }
};

Person.prototype.getCooperTestFemale = function(distance)  {
  if(this.age>= 1 && this.age<= 14) {
    if(distance >= 2000){
      return 'Excellent'
    }
    if(distance >= 1900 && distance <= 1999){
      return 'Above Average'
    }
    if(distance >= 1600 && distance <=1899){
      return 'Average'
    }
    if(distance >= 1500 && distance <=1599){
      return 'Below Average'
    }
    if(distance < 1500){
      return 'Poor'
    }
  }
  if(this.age>= 15 && this.age<= 16) {
    if(distance >= 2100){
      return 'Excellent'
    }
    if(distance >= 2000 && distance <= 2099){
      return 'Above Average'
    }
    if(distance >= 1700 && distance <=1999){
      return 'Average'
    }
    if(distance >= 1600 && distance <=1699){
      return 'Below Average'
    }
    if(distance < 1600){
      return 'Poor'
    }
  }
  if(this.age>= 17 && this.age<= 19) {
    if(distance >= 2300){
      return 'Excellent'
    }
    if(distance >= 2100 && distance <= 2299){
      return 'Above Average'
    }
    if(distance >= 1800 && distance <=2099){
      return 'Average'
    }
    if(distance >= 1700 && distance <=1799){
      return 'Below Average'
    }
    if(distance < 1700){
      return 'Poor'
    }
  }
  if(this.age>= 20 && this.age<= 29) {
    if(distance >= 2700){
      return 'Excellent'
    }
    if(distance >= 2200 && distance <= 2699){
      return 'Above Average'
    }
    if(distance >= 1800 && distance <=2199){
      return 'Average'
    }
    if(distance >= 1500 && distance <=1799){
      return 'Below Average'
    }
    if(distance < 1500){
      return 'Poor'
    }
  }
  if(this.age>= 30 && this.age<= 39) {
    if(distance >= 2500){
      return 'Excellent'
    }
    if(distance >= 2000 && distance <= 2499){
      return 'Above Average'
    }
    if(distance >= 1700 && distance <=1999){
      return 'Average'
    }
    if(distance >= 1400 && distance <=1699){
      return 'Below Average'
    }
    if(distance < 1400){
      return 'Poor'
    }
  }
  if(this.age>= 40 && this.age<= 49) {
    if(distance >= 2300){
      return 'Excellent'
    }
    if(distance >= 1900 && distance <= 2299){
      return 'Above Average'
    }
    if(distance >= 1500 && distance <=1899){
      return 'Average'
    }
    if(distance >= 1200 && distance <=1499){
      return 'Below Average'
    }
    if(distance < 1200){
      return 'Poor'
    }
  }
  if(this.age>= 50) {
    if(distance >= 2200){
      return 'Excellent'
    }
    if(distance >= 1700 && distance <= 2199){
      return 'Above Average'
    }
    if(distance >= 1400 && distance <=1699){
      return 'Average'
    }
    if(distance >= 1100 && distance <=1399){
      return 'Below Average'
    }
    if(distance < 1100){
      return 'Poor'
    }
  }
};
