const readlineSync = require("readline-sync");

const name = readlineSync.question("Hi! What's your name? ");
console.log("Hello, " + name + "!");
