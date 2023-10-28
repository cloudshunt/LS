

function calculateBMI(heightInCm, weightInKilograms){
  let heightInMeters = heightInCm/100;

  let bmi = ( weightInKilograms / heightInMeters**2 ).toFixed(2);
  console.log(bmi);
}

calculateBMI(180, 80); // "24.69"