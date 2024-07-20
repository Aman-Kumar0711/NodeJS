const fs = require("fs");
//fs.mkdirSync("Aman");
//fs.writeFileSync("Aman/bio.txt", "Hey there My name is Aman");
//fs.appendFileSync("Aman/bio.txt", ". I am from Agra");
//const data = fs.readFileSync("Aman/bio.txt").toString();
const data = fs.readFileSync("Aman/bio.txt", "utf8");
console.log(data);
//rename the file
fs.renameSync("Aman/bio.txt", "Aman/myBio.txt");
//fs.unlinkSync("Aman/myBio.txt"); iss se file delete ho jaayegi
//fs.rmdir("Aman") iss se folder delete ho jaayega
