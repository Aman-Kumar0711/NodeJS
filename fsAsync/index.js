//isme asynchronous tareeke ki baat karenge
//to use anything asynchronously we must provide a callback
const fs = require("fs");
//callback function call hoga jab humaara task complete ho jaayega and humaara kuchh response aayega...ya to successfully ho gaya hoga task complete ya kuchh error aaya hoga
// fs.writeFile("read.txt", "Asyc File", (err) => {
//   console.log("Task Completed");
// });
//basically callback fxn ka kaam hai ki ek baar task complete ho jaayeg to kya karna hai uske baad?
//async execution is all about callbacks
// fs.appendFile("read.txt", ". Created Successfully", (err) => {
//   console.log("Data Added");
// });
fs.readFile("read.txt", "UTF-8", (err, res) => {
  console.log(res);
});
//read ke time 2 argument pass karne padte hain callback fxn mei
