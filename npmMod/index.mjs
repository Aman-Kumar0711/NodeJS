//jidhar humko use karne hain node packages uske root folder mei humko pehle initialize karna padta hai npm ko
//main jitne bhi packages ko install karunga using npm woh sab mere package.json mei aa jaayenge as dependencies
//humari jo dependency hai uska code rakhta hai node modules
//const chalk = require("chalk");
//yeh mujhe error de rha hai kyun ki:
// The error you're encountering is due to trying to use require to import an ES module. chalk has transitioned to an ES module, and require cannot be used to import ES modules in Node.js.

//ek tareeka to hai ki main dynamically import kar loon async form mei
//dusra hai ki main pehle file ka naam index.mjs karu and then yeh likhu
//import chalk from 'chalk'
import chalk from "chalk";
import validator from "validator";
//ES6 mei hum isi format mei karte hain import

//console.log(chalk.blue("Hello world!"));
//iss module ki madad se hum text ka rang change kar sakte hain, usko bold, italics etc mei likh sakte hain and so on...
//console.log(chalk.blue.underline("Hello world!"));
//mujhe bgc ko text color banana ho and text color ko bgc to:
//console.log(chalk.blue.inverse("Hello world!"));
console.log(chalk.green.inverse("True"));
console.log(chalk.red.inverse("False"));
const res = validator.isEmail("amanchahar175@gmail.com");
//console.log(res);
//main chahta hoon ki email agar sahi ho basically result true ho to green mei aaye otherwise false mei
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
//isEmail, isUrl etc sab jaan sakte hain
