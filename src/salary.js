const readlineSync = require("readline-sync");

const PRETAX = 0.07;
const FEDERAL_income_tax = 0.157;
const STATE_income_tax = 0.0447;
const SOCIAL_security_tax = 0.062;
const MEDICARE_tax = 0.0145;
const PAY_periods_per_year = 24;


let userAnnualSalary = Number(readlineSync.question("\nAnnual Salary: "));
//let userPeriodicSalary = userAnnualSalary / PAY_PERIODS_PER_YEAR;

let preTaxSalary = userAnnualSalary - (userAnnualSalary * PRETAX);
console.log(preTaxSalary);
let totalDeductionPercentage = FEDERAL_income_tax + STATE_income_tax + SOCIAL_security_tax + MEDICARE_tax;
console.log(totalDeductionPercentage);
takeHomePay = (preTaxSalary - (preTaxSalary * totalDeductionPercentage)) / PAY_periods_per_year;
console.log(takeHomePay);
takeHomePay = takeHomePay.toLocaleString("en", { style: "currency", currency: "USD" });


console.log("\nYour take-home pay each check will be " + takeHomePay + ".");
