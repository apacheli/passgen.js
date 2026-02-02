import { generatePassword, highlightPassword } from "./lib.ts";

const password = generatePassword(16);

console.log("Your generated password is:", highlightPassword(password));
