const readlineSync = require("readline-sync");

const STUDENTS = Number(readlineSync.question("\nStudents: "));
const TEACHERS = Number(readlineSync.question("Teachers: "));
const CAPACITY = Number(readlineSync.question("Bus capacity: "));

let totalPeople = TEACHERS + STUDENTS;
let totalBuses = Math.ceil(totalPeople / CAPACITY);
let peopleOnLastBus = totalPeople % CAPACITY;

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + peopleOnLastBus + " passenger(s) on the last bus.\n");

//what if even number of people fit in the bus
