const readlineSync = require("readline-sync");

const HOURLY_WAGE = Number(readlineSync.question("\nHourly wage: "));


let Hoursmonday = Number(readlineSync.question("\nMonday: "));
let Hourstuesday = Number(readlineSync.question("Tuesday: "));
let Hourswednesday = Number(readlineSync.question("Wednesday: "));
let Hoursthursday = Number(readlineSync.question("Thursday: "));
let Hoursfriday = Number(readlineSync.question("Friday: "));
let Hourssaturday = Number(readlineSync.question("Saturday: "));
let Hourssunday = Number(readlineSync.question("Sunday: "));


let mondayEarnings = Hoursmonday * HOURLY_WAGE;
let tuesdayEarnings = Hourstuesday * HOURLY_WAGE;
let wednesdayEarnings = Hourswednesday * HOURLY_WAGE;
let thursdayEarnings = Hoursthursday * HOURLY_WAGE;
let fridayEarnings = Hoursfriday * HOURLY_WAGE;
let saturdayEarnings = Hourssaturday * HOURLY_WAGE;
let sundayEarnings = Hourssunday * HOURLY_WAGE;


let totalWeekSalary = mondayEarnings + tuesdayEarnings + wednesdayEarnings + thursdayEarnings + fridayEarnings + saturdayEarnings + sundayEarnings;
totalWeekSalary = totalWeekSalary.toLocaleString("en", { style: "currency", currency: "USD" });

console.log("\nYou'll make " + totalWeekSalary + " this week.");

