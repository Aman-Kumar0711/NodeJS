//the path module provides utilities for working with files and directory paths.
const path = require("path");
//console.log(path.dirname("C:/Users/Aman/OneDrive/Desktop/NodeJS/path.js"));
//iss se jis directory mei main kaam kar rha hoon uska naam aa jaayega
//agar jis file per main kaam kar rha hoon uska extension jaan na ho to:
//console.log(path.extname("C:/Users/Aman/OneDrive/Desktop/NodeJS/path.js"));
//file ka naam jaan na ho to:
//console.log(path.basename("C:/Users/Aman/OneDrive/Desktop/NodeJS/path.js"));
//saari significant info ek baar mei hi chahiye to:
//console.log(path.parse("C:/Users/Aman/OneDrive/Desktop/NodeJS/path.js"));
//ofcourse yeh ek object aaya hai to main iski properties ko . se call call kar sakta hoon
const myPath = path.parse("C:/Users/Aman/OneDrive/Desktop/NodeJS/path.js");
console.log(myPath.name);
