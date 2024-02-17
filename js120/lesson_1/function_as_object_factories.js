// eslint-disable-next-line max-lines-per-function
function createCar(make, fuelLevel, engineOn) {
  let carObj = {
    "Make": make,
    "Fuel Level": fuelLevel,
    "Engine Status": engineOn,

    startEngine() {
      this["Engine Status"] = true;
    },

    drive() {
      this["Fuel Level"] -= 0.1;
    },

    stopEngine() {
      this["Engine Status"] = false;
    },

    refuel(percent) {
      if ((this["Fuel Level"] + (percent / 100)) <= 1) {
        this["Fuel Level"] += (percent / 100);
      } else {
        this["Fuel Level"] = 1;
      }
    }
  };

  return carObj;
}

let raceCar1 = createCar('BMW', 0.5, false);
console.log(raceCar1);
raceCar1.drive();
console.log(raceCar1);

// let raceCar2 = createCar('Ferrari', 0.7, true);
// raceCar2.drive();