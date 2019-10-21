const readlineSync = require("readline-sync");

let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

let diagonal = Math.hypot(width_in, length_in);
diagonal = diagonal.toFixed(2);
diagonal = diagonal.toLocaleString();


console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has diagonal of " + diagonal + " inch(es).\n" );
