const readlineSync = require("readline-sync");

const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;
const NUMBER_OF_ASSIGNMENTS = 3;


let GradehwOne = Number(readlineSync.question("\nEnter three homework grades.\n"));
let GradehwTwo = Number(readlineSync.question(""));
let GradehwThree = Number(readlineSync.question(""));


let GradequizOne = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let GradequizTwo = Number(readlineSync.question(""));
let GradequizThree = Number(readlineSync.question(""));


let GradetestOne = Number(readlineSync.question("\nEnter three test grades.\n"));
let GradetestTwo = Number(readlineSync.question(""));
let GradetestThree = Number(readlineSync.question(""));


let HwfinalGrade = ((GradehwOne + GradehwTwo + GradehwThree) / NUMBER_OF_ASSIGNMENTS) * HOMEWORK_WEIGHT;
let QuizfinalGrade = ((GradequizOne + GradequizTwo + GradequizThree) / NUMBER_OF_ASSIGNMENTS) * QUIZ_WEIGHT;
let TestfinalGrade = ((GradetestOne + GradetestTwo + GradetestThree) / NUMBER_OF_ASSIGNMENTS) * TEST_WEIGHT;


let markingPeriodGrade = (HwfinalGrade + QuizfinalGrade + TestfinalGrade);
markingPeriodGrade = markingPeriodGrade.toFixed(2);


console.log("\nYour marking period grade is " + markingPeriodGrade + "%.\n")
