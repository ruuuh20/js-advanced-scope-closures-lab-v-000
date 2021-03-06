function produceDrivingRange(blockRange) {
  return function(starting, ending) {
    let start = parseInt(starting);
    let end = parseInt(ending)
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;


    if (difference > 0) {
      // return true because range is larger than distance to travel
      return `within range by ${difference}`

    }
    else {
      return`${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId= 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId
    }

  }
}
