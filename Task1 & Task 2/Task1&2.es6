// Test Case 1
let markMass = 78.0;  // Mark mass in kg
let markHeight = 1.69;  // Mark height in meters

let johnMass = 92.0;  // John mass in kg
let johnHeight = 1.95;  // John height in meters


// Test Case 2

// let markMass = 95.0;  // Mark mass in kg
// let markHeight = 1.88;  // Mark height in meters

// let johnMass = 85.0;  // John mass in kg
// let johnHeight = 1.76;  // John height in meters

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);


let markHigherBMI = markBMI > johnBMI;

//Task 2 Log Console 
if (markHigherBMI) {
  //We Used toFixed(1) function to round the numbers to nearst tenth 
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
  } else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
  }