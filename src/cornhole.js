
const length = 48;
const width = 24;
const diameter = 6;

let BoardArea = length * width;
let radius = diameter / 2;
let CircleArea = Math.PI * (radius ** 2);



let cornholeSurfaceArea = BoardArea - CircleArea;
cornholeSurfaceArea = cornholeSurfaceArea.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("The surface area of a standard Cornhole board is " + cornholeSurfaceArea + " square inch(es).");

