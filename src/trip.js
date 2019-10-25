const readlineSync = require("readline-sync");

const nstudents = Number(readlineSync.question("\nStudents: "));
const nteachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let totalPeople = nteachers + nstudents;
let totalBuses = Math.ceil(totalPeople / capacity);
let peopleOnLastBus = totalPeople % capacity;

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + peopleOnLastBus + " passenger(s) on the last bus.\n");
