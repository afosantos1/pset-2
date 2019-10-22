  
const readlineSync = require("readline-sync");

const INCHES_TO_CM = 2.54;

let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

let width_cm = width_in * INCHES_TO_CM;
let length_cm = length_in * INCHES_TO_CM;
let perimeter = (2 * length_cm) + (2 * width_cm);
perimeter = perimeter.toFixed(2);
perimeter = perimeter.toLocaleString();

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).\n" );
