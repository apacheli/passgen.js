import { generatePassword, highlightPassword } from "./lib.ts";
import { generatePassphrase } from "./passphrase.ts";

const password = generatePassword(16);
const passphrase = generatePassphrase(5);

console.log("Your generated password is:", highlightPassword(password));
console.log("Your generated passphrase is:", highlightPassword(passphrase));
